import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ACTIONS_TYPES, useUser, useUserDispatch } from "../../context/UserContext";
import { rateTeam } from "../../utils/rateTeam";
import { TAP_INCREMENT, URLS } from "../../constants/constants";
import { debounce } from "../../utils/debounced";


const Container = styled.div`

`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background: #EB9C00;
  margin-top:1rem;
  box-shadow: 0 0 20px #EB9C00;
  cursor: pointer;
  font-weight: 700;
  color: #fff;
`;


const UserTeamDevelop = ({ setIsTeamUpdated, setLocalStorageStateValue, user, dispatch }) => {

  const [energy, setEnergy] = useState(user.energy);

  useEffect(() => {
    setEnergy(user.energy);
  }, [user.energy]);

  const tapRequest = async (obj) => {

    const response = await fetch(URLS.editTeam, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsTeamUpdated((prevState) => ++prevState);
    setLocalStorageStateValue({ ...user, userTeam: obj.team, energy: obj.energy });
  };

  const debounceTapReq = useCallback(debounce(tapRequest, 1000), []);

  const tapHandle = () => {
    if (energy === 0) return;
    setEnergy(energy - 1);

    const points = +(user.userTeam.points + TAP_INCREMENT).toFixed(2);
    const passAccuracy = +(user.userTeam.passAccuracy + TAP_INCREMENT).toFixed(2);

    const stars = rateTeam({
      passAccuracy,
      points
    });

    const payload = {
      points,
      passAccuracy,
      stars
    };

    dispatch({ type: ACTIONS_TYPES.tap, payload });

    const obj = {
      team: { ...user.userTeam, ...payload },
      id: user._id,
      energy: energy - 1
    };

    debounceTapReq(obj);
  };

  return (
    <Container>
      <p>Energy: <b>{energy}</b></p>

      <Circle
        style={{
          background: (energy === 0) && '#ccc',
          boxShadow: (energy === 0) && '0 0 20px #ccc',
          cursor: (energy === 0) && 'default'
        }}
        disabled={energy === 0}
        onPointerUp={tapHandle}>TAP</Circle>
    </Container >
  );
};

export default UserTeamDevelop;