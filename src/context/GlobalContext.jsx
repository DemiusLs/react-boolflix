import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

const GlobalContext = createContext();


const GlobalContextProvider = ({ children }) => {

    const apiUrl = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;




    const [arraySeries, setArraySeries] = useState([])
    const [arrayMovies, setArrayMovies] = useState([])

    // const completeUrl = `${apiUrl}api_key=${apiKey}&query=${textSearch}`;
    //const completeUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=ciao`


    const searchSeries = (searchKey) => {

        const params = {
            api_key: apiKey,
            query: searchKey,
            language: "it-IT"
        }

        axios.get(`${apiUrl}/search/tv`, {
            params
        })
            .then(resp => {
                setArraySeries(resp.data.results)
            }
            )
    }

    const searchMovies = (searchKey) => {

        const params = {
            api_key: apiKey,
            query: searchKey,
            language: "it-IT"
        }

        axios.get(`${apiUrl}/search/movie`, {
            params
        })
            .then(resp => {
                setArrayMovies(resp.data.results)
            }
            )
    }




    const globalContextValues = {
        arraySeries, searchSeries, searchMovies, arrayMovies
    }

    return (

        <GlobalContext.Provider value={globalContextValues} >
            {children}
        </GlobalContext.Provider>
    )
}



export { GlobalContext, GlobalContextProvider };