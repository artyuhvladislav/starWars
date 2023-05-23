import { useState, createContext, useContext } from "react";

const FilterContext = createContext()

export const useFilter = () => {
    const context = useContext(FilterContext)

    if (!context) {
        throw new Error(`useFilter must be used within a FilterProvider`)
    }

    return context
}

export const FilterProvider = ({ children }) => {
    const defaultFilterOptions = {
        homeWorld: { active: null, allItems: ['homeWorld'] },
        species: { active: null, allItems: ['species'] },
        status: { active: null, allItems: ['status', 'active', 'disable'] },
    }

    const [filterOptions, setFilterOption] = useState(defaultFilterOptions)
    const value = [filterOptions, setFilterOption]
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}