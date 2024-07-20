import styled from "styled-components";
import FilterListItem from "../FilterListItem/FilterListItem";
import { useState } from "react";

const FilterContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;

  @media only screen and (max-width: 1200px) {
       overflow-x:scroll
  }

  li {
    margin-right: 10px;
    &:first-child {
      flex: 0.5
    }
    &:nth-child(2){
      flex: 1.5
    }
    &:nth-child(3) {
      flex: 1.7
    }
    &:nth-child(4),
    &:nth-child(5) {
      flex: 1
    }
    &:last-child {
      flex: 1;
      margin-right: 0;
    }
  }
`;

const FILTER_LIST = [
  { filterName: null, title: '№' },
  { filterName: 'userName', title: 'Nick name' },
  { filterName: 'name', title: 'Team name' },
  { filterName: 'points', title: 'Points' },
  { filterName: 'passAccuracy', title: 'Pass %' },
  { filterName: 'stars', title: 'Rating' }
];

const FilterList = () => {
  const [activeFilter, setActiveFilter] = useState({ filterName: '', direction: '' });

  const handleActiveFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <FilterContainer>
      {FILTER_LIST.map(filter => (
        <FilterListItem
          onActiveFilter={handleActiveFilter}
          activeFilter={activeFilter}
          key={filter.title}
          title={filter.title}
          filterName={filter.filterName}
        />))}
    </FilterContainer>
  );
};

export default FilterList;