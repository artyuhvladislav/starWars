import styled from "styled-components";
import { useUser } from "../../context/UserContext";
import { Button, List, Search, FilterList, UserTeam } from "../../components";
import { useEffect, useState } from "react";
import { ACTIONS_TYPES, useTeamsDispatch, useTeams } from "../../context/TeamsContext";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../constants/constants";
import { debounce } from "../../utils/debounced";


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

  const [searchValue, setSearchValue] = useState('');
  const [isTeamDeleted, setIsTeamDeleted] = useState(false);
  const [isTeamUpdated, setIsTeamUpdated] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchTeams = async () => {
      const response = await fetch(URLS.teams, { signal });
      return await response.json();
    };

    if (searchValue === '') {
      fetchTeams()
        .then(teams => dispatch({ type: ACTIONS_TYPES.getTeams, payload: teams }))
        .catch(err => console.log(err.message));
    } else {
      const payload = {
        type: ACTIONS_TYPES.search,
        value: searchValue
      };
      const dispatchDebounced = debounce(dispatch, 200);
      dispatchDebounced(payload);
    }
    return () => controller.abort();
  }, [searchValue, isTeamDeleted, isTeamUpdated]);


  return (
    <Container>
      {user?.userTeam && <UserTeam setIsTeamDeleted={setIsTeamDeleted} setIsTeamUpdated={setIsTeamUpdated} />}
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
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <FilterList />
      <List teams={teams} dispatch={dispatch} />
    </Container >
  );
};

export default Main;