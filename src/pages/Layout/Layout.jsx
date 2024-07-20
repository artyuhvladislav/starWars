import styled from "styled-components";
import bg from "../../img/bg.jpg";
import { Outlet } from 'react-router-dom';
import { Header } from "../../components";
import { UserProvider } from "../../context/UserContext";
import { TeamsProvider } from "../../context/TeamsContext";

const Background = styled.div`
  background: no-repeat top url(${bg});
  background-size: cover;
  min-height: 100vh;
  padding-bottom: 96px;
`;


const Layout = () => {
  return (
    <Background>
      <UserProvider>
        <Header />
        <TeamsProvider>
          <Outlet />
        </TeamsProvider>
      </UserProvider>
    </Background>
  );
};

export default Layout;