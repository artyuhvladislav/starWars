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


const FilterListItem = (props) => {
  const teams = useTeams();
  const { title, filterName, onActiveFilter, activeFilter } = props;

  const dispatch = useTeamsDispatch();

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

    &:first-child {
      background: ${(filterName === activeFilter.filterName) && (activeFilter.direction === 'up') ? '#1A394C' : ''};
      div {
        background: ${(filterName === activeFilter.filterName) && (activeFilter.direction === 'up') ? '#1A394C' : ''};
        border-bottom: 8px solid ${(filterName === activeFilter.filterName) && (activeFilter.direction === 'up') ? '#fff' : '#1A394C'};
      }
    }

    &:last-child {
      background: ${(filterName === activeFilter.filterName) && (activeFilter.direction === 'down') ? '#1A394C' : ''};
      div {
        transform: rotate(180deg);
        background: ${(filterName === activeFilter.filterName) && (activeFilter.direction === 'down') ? '#1A394C' : ''};
        border-bottom: 8px solid ${(filterName === activeFilter.filterName) && (activeFilter.direction === 'down') ? '#fff' : '#1A394C'};
      }
    }

    &:hover {
      border-width: 2px;
    }
  }
`;

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
        <button className="first" onClick={handleSortUp}>
          <Arrow></Arrow>
        </button>
        <button className="second" onClick={handleSortDown}>
          <Arrow></Arrow>
        </button>
      </SortContainer>}

    </Container>
  );
};

export default FilterListItem;