import styled from "styled-components";
import { useTeams, useTeamsDispatch } from "../../context/TeamsContext";
import { ACTIONS_TYPES } from './../../context/TeamsContext';

const Container = styled.li`
  display: flex;
  border-radius: 10px;
  background: #fff;
  align-items: center;
  padding: 11px 16px;
  justify-content: space-between;
  p {
    color: #1A394C;

    @media only screen and (max-width: 800px) {
       font-size: 14px
  }
  }
`;
const Arrow = styled.div`
width: 0;
height: 0;
border: 6px solid transparent;
border-top: 0;

`;
const SortContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

  button {
  border: 1px solid #1A394C;
  background: none;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  cursor: pointer;

    div {
      border-bottom-style: solid;
      border-bottom-width: 8px;
    }

    &:last-child {
      div {
        transform: rotate(180deg);
      }
    }

    &:hover {
      border-width: 2px;
    }
  }
`;


const FilterListItem = (props) => {
  const teams = useTeams();
  const { title, filterName, onActiveFilter, activeFilter } = props;
  const dispatch = useTeamsDispatch();

  const isSortDirectionUp = (filterName === activeFilter.filterName) && (activeFilter.direction === 'up');
  const isSortDirectionDown = (filterName === activeFilter.filterName) && (activeFilter.direction === 'down');


  const handleSortUp = () => {
    if (teams.length === 0) return;
    onActiveFilter({ filterName, direction: 'up' });
    const payload = {
      type: ACTIONS_TYPES.sort,
      sortName: filterName,
      sortDirection: 'up'
    };
    dispatch(payload);
  };
  const handleSortDown = () => {
    if (teams.length === 0) return;
    onActiveFilter({ filterName, direction: 'down' });
    const payload = {
      type: ACTIONS_TYPES.sort,
      sortName: filterName,
      sortDirection: 'down'
    };
    dispatch(payload);
  };
  return (
    <Container>
      <p>{title}</p>
      {filterName && <SortContainer>
        <button style={{
          background: isSortDirectionUp ? '#1A394C' : ''
        }} onClick={handleSortUp}>
          <Arrow style={{
            background: isSortDirectionUp ? '#1A394C' : '',
            borderBottomColor: isSortDirectionUp ? '#fff' : '#1A394C'
          }}></Arrow>
        </button>
        <button style={{
          background: isSortDirectionDown ? '#1A394C' : ''
        }} onClick={handleSortDown}>
          <Arrow style={{
            background: isSortDirectionDown ? '#1A394C' : '',
            borderBottomColor: isSortDirectionDown ? '#fff' : '#1A394C'
          }}></Arrow>
        </button>
      </SortContainer>}

    </Container >
  );
};

export default FilterListItem;