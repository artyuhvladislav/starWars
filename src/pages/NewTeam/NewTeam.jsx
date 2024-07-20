import styled from "styled-components";
import { Button } from "../../components";
import { useState } from "react";
import { ACTIONS_TYPES, useUser, useUserDispatch } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { URLS } from "../../constants/constants";


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
    margin-bottom: 3rem;
    font-weight: 400;

    @media only screen and (max-width: 600px) {
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 1.5rem;
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


const NewTeam = () => {
  const initialUserTeam = {
    name: '',
    passAccuracy: '',
    points: '',
    stars: ''
  };
  const user = useUser();
  const dispatch = useUserDispatch();
  const [userTeam, setUserTeam] = useState(initialUserTeam);
  const [isSuccess, setIsSuccess] = useState(false);

  const buttonStyle = {
    width: '100%',
    hover: 'bold',
    bgColor: '#EB9C00',
    color: '#fff'
  };

  const fieldsTouched = Boolean(userTeam.name && userTeam.passAccuracy && userTeam.points && userTeam.stars);
  const isActive = fieldsTouched;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setUserTeam({ ...userTeam, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createNewTeam = async () => {
      const payload = {
        team: { ...userTeam, userName: user.userName },
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
              min="1" max="100"
              onChange={handleChange}
              value={userTeam.passAccuracy}
              name='passAccuracy'
              placeholder="Pass accuracy"
            />
          </Field>
          <Field>
            <Input
              type="number"
              min="1" max="100"
              onChange={handleChange}
              value={userTeam.points}
              name='points'
              placeholder="Points"
            />
          </Field>
          <Field>
            <Input
              type="number"
              min="1" max="5"
              onChange={handleChange}
              value={userTeam.stars}
              name='stars'
              placeholder="Rating"
            />
          </Field>
          <Button type='submit' isActive={isActive} buttonStyle={buttonStyle}>Create</Button>
        </Form>
      </Container>
    )}</>
  );

};

export default NewTeam;



