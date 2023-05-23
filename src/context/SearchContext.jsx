import React, { createContext, useContext } from 'react'
import { useState } from 'react'


const SearchParamContext = createContext()

export const useSearchParam = () => {
    const context = useContext(SearchParamContext)

    if (!context) {
        throw new Error(`useSetData must be used within a DataProvider`)
    }

    return context
}

export const SearchParamProvider = ({ children }) => {
    const [searchParam, setSearchParam] = useState('')
    const value = [searchParam, setSearchParam]
    return (
        <SearchParamContext.Provider value={value}>
            {children}
        </SearchParamContext.Provider>
    )

}


export default SearchParamProvider