import ListComponent from '../components/ListComponent'
import { GlobalContext } from '../context/GlobalContext'
import { useContext, useEffect } from 'react'


const Movies = () => {

    const { arrayMovies, searchMovies } = useContext(GlobalContext)

    useEffect(() => {


        searchMovies("Anelli");

    }, [])



    return (
        <main>



            <h1> Movies </h1>

            {arrayMovies.length > 0 && <ListComponent listArray={arrayMovies} title={"Lista movies"} />}
        </main>

    )
}

export default Movies;