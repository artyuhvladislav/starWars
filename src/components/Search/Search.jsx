import React from 'react'
import { useSearchParam } from '../../context/SearchContext'

const Search = () => {

    const [searchParam, setSearchParam] = useSearchParam()

    const handleOnChange = ({ target }) => {
        setSearchParam(target.value)
    }

    return (
        <input value={searchParam} type="text" class="controls__item search" placeholder="Search" onChange={handleOnChange} />
    )
}

export default Search