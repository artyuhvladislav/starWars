import React from 'react'
import { useState, createContext } from "react";

export const SortContext = createContext()


export const SortProvider = ({ children }) => {
    const [sortObj, setSortObj] = useState({ id: null, flag: null, prop: null })
    return (
        <SortContext.Provider value={{ sortObj, setSortObj }}>
            {children}
        </SortContext.Provider>
    )
}