import { createContext, useState } from "react";

const GlobalContext = createContext();


const globalContextProvider = ({ children }) => {

    const [tryvar, setTryVar] = useState("Hello")

    const globalContextValues = {
        tryvar,
    }


    return (

        <GlobalContext.Provider value={globalContextValues} >
            {children}
        </GlobalContext.Provider>
    )
}



export { GlobalContext, globalContextProvider };