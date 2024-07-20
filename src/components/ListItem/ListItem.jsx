import styled from "styled-components";
import avatar from '../../img/avatar.svg';
import teamLogo from '../../img/teamLogo.png';

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
  const { index, name, userName, points, passAccuracy, stars } = props;
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
        {Array(5).fill(null).map((_, idx) => {
          const isFilled = idx + 1 <= stars;
          return (
            <svg key={idx} width="21" height="19" viewBox="0 0 21 19" fill={isFilled ? "#EB9C00" : 'none'} xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 1.61804L12.3819 7.40983L12.4941 7.75532H12.8574H18.9473L14.0205 11.3348L13.7266 11.5484L13.8388 11.8939L15.7207 17.6857L10.7939 14.1061L10.5 13.8926L10.2061 14.1061L5.27931 17.6857L7.16118 11.8939L7.27344 11.5484L6.97954 11.3348L2.05275 7.75532H8.1426H8.50587L8.61813 7.40983L10.5 1.61804Z" stroke="#EB9C00" />
            </svg>
          );
        })}
      </StarsContainer>
    </Li>
  );
};

export default ListItem;