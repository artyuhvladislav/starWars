import { useState } from "react";
import { Button } from "../../components";
import styled from "styled-components";
import user from '../../img/user.svg';
import password from '../../img/password.svg';
import { ACTIONS_TYPES, useUserDispatch } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { URLS } from './../../constants/constants';

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
    margin-right: 108px;
    margin-left: auto;

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
         margin-bottom: 130px;
    }
`;
const Error = styled.p`
    position: absolute;
    bottom: -25px;
    font-size: 14px;
    color: #E80E0E;
`;
const Icon = styled.img`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
`;

const Login = () => {
  const [_, setUserLocalStorage] = useLocalStorage('userName');

  const initialForm = {
    name: '',
    password: '',
  };
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  const fieldsTouched = Boolean(form.name && form.password);
  const isActive = fieldsTouched;

  const buttonStyle = {
    width: '100%',
    hover: 'bold',
    bgColor: '#EB9C00',
    color: '#fff'
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setForm({ ...form, [name]: value });
  };

  const login = async () => {
    const payload = {
      userName: form.name,
      userPassword: form.password
    };
    const response = await fetch(URLS.login, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login()
      .then(user => {
        dispatch({ type: ACTIONS_TYPES.login, payload: user });
        setUserLocalStorage(user);
        navigate('/');
      })
      .catch(err => setError(err));
  };

  return (
    <Container>
      <Title>Log in</Title>
      <Form onSubmit={handleSubmit}>
        <Field>
          <Input
            onChange={handleChange}
            value={form.name}
            name='name' placeholder="Name"
            style={{
              borderColor: error && '#E80E0E'
            }}
          />
          <Icon src={user} />
        </Field>
        <Field>
          <Input
            onChange={handleChange}
            name='password' placeholder="Password"
            value={form.password}
            style={{
              borderColor: error && '#E80E0E'
            }}
          />
          <Icon src={password} />
          {error && <Error>{error}</Error>}
        </Field>
        <Button type='submit' isActive={isActive} buttonStyle={buttonStyle}>Log in</Button>
      </Form>
    </Container>
  );
};

export default Login;