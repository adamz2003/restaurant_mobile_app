import React, { createContext, useState } from 'react'

const defaultValues = {
    category : "",
    searchword : ""
}

export const FilterContext = createContext(defaultValues);

export default function FilterContextProvider({ children }) {
    const [category, setCategory] = useState("");
    const [searchword, setSearchwrod] = useState("");

    return (
        <FilterContext.Provider value={{
            category,
            searchword,
            setCategory,
            setSearchwrod
        }}>
            {children}
        </FilterContext.Provider>
    )
}

