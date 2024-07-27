import styled from "styled-components";
import logo from '../../img/logo.png';
import { Button, User } from "../";
import { useUser } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";


const HeaderBackground = styled.div`
    background: #fff;
    width: 100%;
  `;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;    

    @media only screen and (max-width: 800px) {
      padding: 1rem;
    }
  `;

const Logo = styled.img`
    display: block;
    width: 70%;
    max-width: 250px;
    padding-bottom: 5px;
  `;

const InlineBlock = styled.div`
    display: flex;
    justify-content: space-between;
    height: 45px;
    flex-basis: 305px;
  `;

const Header = () => {
  const navigate = useNavigate();
  const user = useUser();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <HeaderBackground>
      <Container>
        <Link to='/'><Logo src={logo} alt='Football teams' /></Link>
        {user?.isLogged ?
          <User user={user} /> :
          (<InlineBlock>
            <Button
              onClick={handleSignUp}
              isActive={true}
              buttonStyle={{
                width: '30%',
                hover: 'bold',
                bgColor: 'none'
              }}>Sing up</Button>
            <Button
              onClick={handleLogin}
              isActive={true}
              buttonStyle={{
                width: '60%',
                hover: 'bold',
                color: '#fff',
                bgColor: '#EB9C00'
              }}>Log in</Button>
          </InlineBlock>)
        }
      </Container>
    </HeaderBackground>
  );
};

export default Header;