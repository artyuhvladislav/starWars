import styled from "styled-components";
import search from '../../img/search.svg';

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

const Search = ({ searchValue, setSearchValue }) => {

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