import React, { createContext, useState } from "react";
import { dishArrays } from "../utils/dishData";

const defaultValues = {
    dishlist: [],
    orderlist: [],
    setDishlist: () => {},
    setOrderlist: () => {},
}
export const DataContext = createContext(defaultValues);

function DataContextProvider({ children }) {
    const [dishlist, setDishlist] = useState(dishArrays);
    const [orderlist, setOrderlist] = useState([]);
    
    return (
        <DataContext.Provider
            value={{
                dishlist,
                orderlist,
                setDishlist,
                setOrderlist,
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;
