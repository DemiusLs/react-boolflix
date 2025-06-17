import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

const GlobalContext = createContext();


const GlobalContextProvider = ({ children }) => {

    const apiUrl = import.meta.env.VITE_API_URL_MOVIES;
    const apiKey = import.meta.env.VITE_API_KEY;



    const [textSearch, setTextSearch] = useState("")
    const [filmArray, setFilmArray] = useState(null)

    const completeUrl = `${apiUrl}api_key=${apiKey}&query=${textSearch}`;
    //const completeUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=ciao`


    const getFilmList = () => {

        console.log(completeUrl)

        axios.get(completeUrl)
            .then(resp => {

                console.log(resp.data.results)
                setFilmArray(resp.data.results)
            }
            )
    }




    const globalContextValues = {
        textSearch, setTextSearch, getFilmList, filmArray
    }

    return (

        <GlobalContext.Provider value={globalContextValues} >
            {children}
        </GlobalContext.Provider>
    )
}



export { GlobalContext, GlobalContextProvider };