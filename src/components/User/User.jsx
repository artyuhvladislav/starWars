import styled from 'styled-components';
import avatar from '../../img/avatar.svg';
import { Button } from '../';
import { ACTIONS_TYPES, useUserDispatch } from '../../context/UserContext';
import { URLS } from '../../constants/constants';


const AvatarContainer = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 100%;
  background:#C9DCF2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 200px;
`;

const AvatarName = styled.p`
  font-size: 16px;
  align-self: center;
`;

const User = ({ user }) => {

  const dispatch = useUserDispatch();
  const handleLogout = () => {
    const logout = async () => {
      const response = await fetch(URLS.logout, {
        method: 'POST',
        body: JSON.stringify({ _id: user._id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.status === 200;
    };
    logout()
      .then(() => dispatch({ type: ACTIONS_TYPES.logout }))
      .catch(err => console.log(err));
  };
  return (
    <Container>
      <AvatarName>{user.userName}</AvatarName>
      <AvatarContainer>
        <img src={avatar} alt="avatar" />
      </AvatarContainer>
      <Button
        onClick={handleLogout}
        isActive={true}
        buttonStyle={{
          width: '30%', bgColor: 'none', hover: 'bold'
        }}>Log out</Button>
    </Container>

  );
};

export default User;