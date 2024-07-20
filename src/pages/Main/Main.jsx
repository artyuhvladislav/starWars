import styled from "styled-components";
import { useUser } from "../../context/UserContext";
import { Button, List, Search, FilterList, UserTeam } from "../../components";
import { useEffect } from "react";
import { ACTIONS_TYPES, useTeamsDispatch, useTeams } from "../../context/TeamsContext";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../constants/constants";



const Container = styled.div`
  padding: 32px 5rem;
  @media only screen and (max-width: 800px) {
    padding: 20px 10px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 800px) {
    button {
      width: 90%;
    }
  }
`;
const Main = () => {
  const user = useUser();
  const teams = useTeams();
  const dispatch = useTeamsDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(URLS.teams);
      return await response.json();
    };
    fetchTeams()
      .then(teams => dispatch({ type: ACTIONS_TYPES.getTeams, payload: teams }))
      .catch(err => console.log(err.message));
  }, []);

  return (
    <Container>
      {user?.userTeam && <UserTeam />}
      {user?.isLogged && !user?.userTeam && <ButtonContainer>
        <Button
          onClick={() => navigate('/newTeam')}
          isActive={true}
          buttonStyle={{
            hover: 'bold',
            bgColor: '#EB9C00',
            color: '#fff',
            width: '30%'
          }}>Create new team</Button>
      </ButtonContainer >}
      <Search />
      <FilterList />
      <List teams={teams} dispatch={dispatch} />
    </Container >
  );
};

export default Main;