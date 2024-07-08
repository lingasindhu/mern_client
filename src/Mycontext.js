import { createContext, useState } from "react";

export const MyContext = createContext();

export function MyProvider({ children }) {
    const [table, setTable] = useState([]);

    return (
        <MyContext.Provider value={{ table, setTable }}>
            {children}
        </MyContext.Provider>
    );
}