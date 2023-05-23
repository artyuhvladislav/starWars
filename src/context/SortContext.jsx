import { useState, createContext, useContext } from "react";

const SortContext = createContext()

export const useSort = () => {
    const context = useContext(SortContext)

    if (!context) {
        throw new Error(`useSort must be used within a SortProvider`)
    }

    return context
}

export const SortProvider = ({ children }) => {
    const defaultSortObj = { id: null, flag: null, prop: null }
    const [sortObj, setSortObj] = useState(defaultSortObj)
    const value = [sortObj, setSortObj]
    return (
        <SortContext.Provider value={value}>
            {children}
        </SortContext.Provider>
    )
}