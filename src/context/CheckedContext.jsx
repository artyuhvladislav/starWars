import React from 'react'
import { useState, createContext } from "react";

export const CheckedContext = createContext()


export const CheckedProvider = ({ children }) => {
    const [checkedData, setCheckedData] = useState([])
    return (
        <CheckedContext.Provider value={{ checkedData, setCheckedData }}>
            {children}
        </CheckedContext.Provider>
    )
}
