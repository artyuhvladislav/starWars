import styled from "styled-components";
import search from '../../img/search.svg';
import { useEffect, useState } from "react";
import { debounce } from "../../utils/debounced";
import { ACTIONS_TYPES, useTeamsDispatch } from "../../context/TeamsContext";
import { URLS } from "../../constants/constants";

const InputContainer = styled.div`
    width: 30%;
    margin: 30px 0;
    position: relative;

    @media only screen and (max-width: 800px) {
        width: 90%;
    }


    input {
        width: 100%;
        padding: 16px 16px 16px 44px;
        border-radius: 10px;

        &::placeholder {
            color: #9A9EA6;
        }
    }

    img {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

const Search = () => {
    const dispatch = useTeamsDispatch();
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const fetchTeams = async () => {
            const response = await fetch(URLS.teams);
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
    }, [searchValue]);


    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    };
    return (
        <InputContainer>
            <input
                onChange={handleChange}
                value={searchValue} type="text"
                placeholder="Search..."
            />
            <img src={search} alt="searchIcon" />
        </InputContainer>
    );
};

export default Search;