import styled from "styled-components";
import { ACTIONS_TYPES, useUser, useUserDispatch } from "../../context/UserContext";
import { Stars, UserTeamDevelop } from '../';
import { URLS } from "../../constants/constants";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useEffect } from "react";


const Container = styled.div`
  background: #F1F5FB;
  padding: 10px 20px 20px 20px;
  display: flex;
  justify-content:space-between;
  border-radius: 10px;
  max-width: 50%;
  margin-bottom: 20px;

  p {
    margin-top: 10px;
  }

  @media only screen and (max-width: 800px) {
    max-width: 100%;
  }
`;

const DeleteButton = styled.button`
  background: #cc4a4a;
  height: 30%;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  margin-left: 30px;

  &:hover {
    background: #c93737
  }
`;

const UserTeam = ({ setIsTeamDeleted, setIsTeamUpdated }) => {
  const dispatch = useUserDispatch();
  const user = useUser();
  const { userTeam, _id } = user;
  const [localStorageValue, setLocalStorageStateValue] = useLocalStorage('user');


  useEffect(() => {

    const updateEnergy = async () => {
      const response = await fetch(URLS.updateEnergy, {
        method: 'POST',
        body: JSON.stringify({ id: _id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    };

    updateEnergy()
      .then((user) => {
        dispatch({ type: ACTIONS_TYPES.setEnergy, energy: user.energy });
        setLocalStorageStateValue(user);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = () => {

    const deleteTeam = async () => {
      const response = await fetch(URLS.deleteTeam, {
        method: 'POST',
        body: JSON.stringify({ id: _id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await response.json();
    };

    deleteTeam()
      .then(() => {
        dispatch({ type: ACTIONS_TYPES.deleteTeam });
        setLocalStorageStateValue({ ...user, userTeam: null });
        setIsTeamDeleted(true);
      });
  };

  return (
    <Container>
      <div>
        <p>Team name:  <b>{userTeam.name}</b></p>
        <p>Points: <b>{userTeam.points}</b></p>
        <p>Pass accuracy: <b>{userTeam.passAccuracy}</b></p>
        <p>stars: <Stars stars={userTeam.stars} id={_id} /></p>
      </div>
      <div>
        <UserTeamDevelop
          user={user}
          localStorageValue={localStorageValue}
          dispatch={dispatch}
          setIsTeamUpdated={setIsTeamUpdated}
          setLocalStorageStateValue={setLocalStorageStateValue}
        />
      </div>
      <DeleteButton onClick={handleDelete}>delete team</DeleteButton>
    </Container>
  );
};

export default UserTeam;