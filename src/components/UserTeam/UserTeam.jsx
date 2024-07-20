import styled from "styled-components";
import { useUser } from "../../context/UserContext";

const Container = styled.div`
  background: #F1F5FB;
  padding: 20px;
  display: flex;
  border-radius: 10px;
  max-width: 350px;
  margin-bottom: 20px;
`;

const UserTeam = () => {
  const { userTeam } = useUser();
  return (
    <Container>
      <div>
        <p>Team name:  <b>{userTeam.name}</b></p>
        <p>Points: <b>{userTeam.points}</b></p>
        <p>Pass accuracy: <b>{userTeam.passAccuracy}</b></p>
        <p>stars: {Array(5).fill(null).map((_, idx) => {
          const isFilled = idx + 1 <= userTeam.stars;
          return (
            <svg key={idx} width="21" height="19" viewBox="0 0 21 19" fill={isFilled ? "#EB9C00" : 'none'} xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 1.61804L12.3819 7.40983L12.4941 7.75532H12.8574H18.9473L14.0205 11.3348L13.7266 11.5484L13.8388 11.8939L15.7207 17.6857L10.7939 14.1061L10.5 13.8926L10.2061 14.1061L5.27931 17.6857L7.16118 11.8939L7.27344 11.5484L6.97954 11.3348L2.05275 7.75532H8.1426H8.50587L8.61813 7.40983L10.5 1.61804Z" stroke="#EB9C00" />
            </svg>
          );
        })}</p>
      </div>
    </Container>
  );
};

export default UserTeam;