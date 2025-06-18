import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"



const SearchBar = () => {

    const [inputVar, setInputVar] = useState("")
    const { searchSeries, searchMovies } = useContext(GlobalContext)

    const handleChange = (e) => {

        setInputVar(e.target.value)
    }


    const handleClick = (event) => {
        event.preventDefault();
        searchSeries(inputVar)
        searchMovies(inputVar)

    }

    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={inputVar} onChange={handleChange} />
            <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
        </form>
    )
}


export default SearchBar