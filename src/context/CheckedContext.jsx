import { useState, createContext, useContext } from "react";

const CheckedContext = createContext()

export const useChecked = () => {
    const context = useContext(CheckedContext)

    if (!context) {
        throw new Error(`useChecked must be used within a CheckedProvider`)
    }

    return context
}

export const CheckedProvider = ({ children }) => {
    const [checkedData, setCheckedData] = useState([])
    const value = [checkedData, setCheckedData]
    return (
        <CheckedContext.Provider value={value}>
            {children}
        </CheckedContext.Provider>
    )
}
