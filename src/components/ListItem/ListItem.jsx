import styled from "styled-components";
import avatar from '../../img/avatar.svg';
import teamLogo from '../../img/teamLogo.png';
import { Stars } from "../";

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #F1F5FB;
  padding: 15px; 
  color: #1A394C;
  border-radius: 10px;
  margin-bottom: 16px;

  @media only screen and (max-width: 800px) {
       width: 900px;
  }
`;

const Index = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
`;

const AvatarContainer = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 100%;
  background:#C9DCF2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex: 2;
`;

const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 4;
  p {
    margin-left: 16px;
  }
`;

const P = styled.p`
  flex: 2;
`;

const ListItem = (props) => {
  const { index, name, userName, points, passAccuracy, stars, _id } = props;
  return (
    <Li>
      <Index>{index}</Index>
      <UserName>
        <AvatarContainer>
          <img src={avatar} alt="avatar" />
        </AvatarContainer>
        <p>{userName}</p>
      </UserName>
      <TeamContainer>
        <img src={teamLogo} alt="teamLogo" />
        <p>{name}</p>
      </TeamContainer>
      <P>{points}</P>
      <P>{passAccuracy}</P>
      <StarsContainer>
        <Stars stars={stars} id={_id} />
      </StarsContainer>
    </Li>
  );
};

export default ListItem;