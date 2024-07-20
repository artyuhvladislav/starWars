import styled from "styled-components";
import ListItem from './../ListItem/ListItem';

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  overflow-y: scroll;

  @media only screen and (max-width: 800px) {
       overflow-x:scroll
  }
`;



const List = ({ teams }) => {
  return (
    <Ul>
      {teams.map((team, index) => <ListItem key={team._id} index={index + 1} {...team} />)}
    </Ul>
  );
};

export default List;