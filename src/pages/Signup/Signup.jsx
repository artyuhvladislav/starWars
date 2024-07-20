import styled from "styled-components";
import { Button } from "../../components";
import user from '../../img/user.svg';
import password from '../../img/password.svg';
import repeatPassword from '../../img/repeatPassword.svg';
import { useState } from "react";
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

const SuccessSignUpTitle = styled.h3`
    font-size: 40px;
    text-align: center;
    margin-bottom: 96px;
    margin-top: 124px;
    padding: 0 20px;
    font-weight: 400;
`;

const SuccessSignUpContainer = styled.div`
    padding-bottom: 130px;
`;


const SignUp = () => {

    const initialForm = {
        name: '',
        password: '',
        repeatPassword: ''
    };

    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState(null);
    const [signedUp, setSignedUp] = useState(false);


    const fieldsTouched = Boolean(form.name && form.password && form.repeatPassword);
    const passwordMatched = form.repeatPassword === form.password;

    const isActive = fieldsTouched && passwordMatched;

    const buttonStyle = {
        bgColor: '#1A394C',
        color: "#fff",
        hover: '#154663'
    };

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setForm({ ...form, [name]: value });
    };

    const signUp = async () => {
        const payload = {
            userName: form.name,
            userPassword: form.password
        };
        const response = await fetch(URLS.signup, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            setSignedUp(true);
        }

        return await response.json();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        signUp()
            .then(res => console.log(res))
            .catch(err => setError(err));
    };

    return (
        <Container>
            {!signedUp ? (
                <>
                    <Title>Sing Up</Title>
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
                            {error && <Error>{error}</Error>}
                        </Field>
                        <Field>
                            <Input
                                onChange={handleChange}
                                name='password' placeholder="Password"
                                value={form.password}
                                style={{
                                    borderColor: !passwordMatched && '#E80E0E'
                                }}
                            />
                            <Icon src={password} />
                        </Field>
                        <Field>
                            <Input
                                onChange={handleChange}
                                name='repeatPassword'
                                placeholder="Repeat Password"
                                value={form.repeatPassword}
                                style={{
                                    borderColor: !passwordMatched && '#E80E0E'
                                }}
                            />
                            <Icon src={repeatPassword} />
                            {!passwordMatched && <Error>passwords are not matched</Error>}
                        </Field>
                        <Button type='submit' isActive={isActive} buttonStyle={buttonStyle}>Sign up</Button>
                    </Form>
                </>
            ) : (
                <SuccessSignUpContainer>
                    <SuccessSignUpTitle>SUCCESSFULLY SIGN UP</SuccessSignUpTitle>
                    <Link to='/login'>
                        <Button
                            isActive={true}
                            buttonStyle={{
                                width: '100%',
                                hover: 'bold',
                                bgColor: '#EB9C00',
                                color: '#fff'
                            }}>
                            log in
                        </Button>
                    </Link>
                </SuccessSignUpContainer>
            )}
        </Container>
    );
};

export default SignUp;