import styled from "styled-components";
import { Button } from "../../components";
import { useRef, useState } from "react";
import { ACTIONS_TYPES, useUser, useUserDispatch } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { URLS } from "../../constants/constants";
import { rateTeam } from "../../utils/rateTeam";
import { useLocalStorage } from "../../hooks/useLocalStorage";


const Input = styled.input`
    width: 100%;
    padding: 16px 40px 16px 20px;
    font-size: 1rem;
    border-radius: 10px;
    background: #fff;
    border: solid 1px #8E8E8E; 
    &::placeholder {
        color: #9A9EA7;
    }    
`;
const Container = styled.div`
    border-radius: 16px;
    padding: 72px 52px;
    background: #fff;
    max-width: 522px;
    max-height: 657px;
    margin-top: 96px;
    margin-left: auto;
    margin-right:auto;

    @media only screen and (max-width: 800px) {
        margin-top: 36px;
        margin-right: 20px;
        margin-left: 20px;
        padding: 1.5rem 1.5rem;
    }
 `;
const Title = styled.h3`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 400;

    @media only screen and (max-width: 600px) {
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 1rem;
    }
`;
const Rules = styled.p`
  margin-bottom: 1rem;
  b {
    color: #EB9C00;
  }
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;   
`;
const Field = styled.div`
    margin-bottom: 30px;
    position: relative;
    &:last-of-type {
         margin-bottom: 70px;
    }
`;
const SuccessTitle = styled.h3`
    font-size: 40px;
    text-align: center;
    margin-bottom: 96px;
    margin-top: 124px;
    padding: 0 20px;
    font-weight: 400;
`;
const SuccessContainer = styled.div`
    padding-bottom: 130px;
`;
const CurrentPoints = styled.p`
  font-size: 20px;
  margin-bottom: 2rem;

  b {
    color: {
      color: #EB9C00;
    }
  }
`;


const NewTeam = () => {
  const initialUserTeam = {
    name: '',
    passAccuracy: '',
    points: '',
  };
  const user = useUser();
  const [_, setLocalStorageStateValue] = useLocalStorage('user');
  const dispatch = useUserDispatch();
  const [userTeam, setUserTeam] = useState(initialUserTeam);
  const [availablePoints, setAvailablePoints] = useState(10);
  const [isSuccess, setIsSuccess] = useState(false);
  const currentSumPoints = useRef({ passAccuracy: 0, points: 0 });

  const buttonStyle = {
    width: '100%',
    hover: 'bold',
    bgColor: '#EB9C00',
    color: '#fff'
  };

  const fieldsTouched = Boolean(userTeam.name && userTeam.passAccuracy && userTeam.points);
  const isActive = fieldsTouched;



  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === 'points' || name === 'passAccuracy') {
      currentSumPoints.current[name] = +value;
      const points = currentSumPoints.current.points + currentSumPoints.current.passAccuracy;

      if (points > 10) {
        currentSumPoints.current.points = 0;
        currentSumPoints.current.passAccuracy = 0;
        setUserTeam({ ...userTeam, passAccuracy: '', points: '' });
        setAvailablePoints(10);
      } else {
        setUserTeam({ ...userTeam, [name]: value });
        setAvailablePoints(10 - points);
      }
    } else {
      setUserTeam({ ...userTeam, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createNewTeam = async () => {
      const rating = rateTeam({
        points: +userTeam.points,
        passAccuracy: +userTeam.passAccuracy
      });
      const payload = {
        team: { ...userTeam, userName: user.userName, stars: rating },
        id: user._id
      };
      const response = await fetch(URLS.createTeam, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    };
    createNewTeam()
      .then(team => {
        setIsSuccess(true);
        const payload = {
          type: ACTIONS_TYPES.updateUserTeam,
          userTeam: team
        };
        dispatch(payload);
        setLocalStorageStateValue({ ...user, userTeam: team });
      })
      .catch(err => console.log(err.message));
  };
  return (
    <>{isSuccess ? (
      <Container>
        <SuccessContainer>
          <SuccessTitle>SUCCESSFULLY CREATE TEAM</SuccessTitle>
          <Link to='/'>
            <Button
              isActive={true}
              buttonStyle={{
                width: '100%',
                hover: 'bold',
                bgColor: '#EB9C00',
                color: '#fff'
              }}>
              Go to main page
            </Button>
          </Link>
        </SuccessContainer >
      </Container>
    ) : (
      <Container>
        <Title>Create your team</Title>
        <Rules>You have <b>10</b> start points to distribute them to categories: Pass accuracy, Points</Rules>
        <CurrentPoints>Points left: <b>{availablePoints}</b></CurrentPoints>
        <Form onSubmit={handleSubmit}>
          <Field>
            <Input
              onChange={handleChange}
              value={userTeam.name}
              name='name'
              placeholder="Team name"
            />
          </Field>
          <Field>
            <Input
              type="number"
              min="0" max="10"
              onChange={handleChange}
              value={userTeam.passAccuracy}
              name='passAccuracy'
              placeholder="Pass accuracy"
            />
          </Field>
          <Field>
            <Input
              type="number"
              min="0" max="10"
              onChange={handleChange}
              value={userTeam.points}
              name='points'
              placeholder="Points"
            />
          </Field>
          { }
          <Button type='submit' isActive={isActive} buttonStyle={buttonStyle}>Create</Button>
        </Form>
      </Container >
    )}</>
  );

};

export default NewTeam;



