import { useState, createContext, useMemo, useContext } from "react";

const DataContext = createContext()

export const useSetData = () => {
    const context = useContext(DataContext)

    if (!context) {
        throw new Error(`useSetData must be used within a DataProvider`)
    }

    return context
}

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([])
    const value = useMemo(() => [data, setData], [data])
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}
