import HeroBanner from '../components/HeroComponent'
import ListComponent from '../components/ListComponent'
import { GlobalContext } from '../context/GlobalContext'
import { useContext, useEffect } from 'react'


const Home = () => {

    const { arraySeries, searchSeries, arrayMovies, searchMovies } = useContext(GlobalContext)



    useEffect(() => {

        searchSeries("Batman");
        searchMovies("Pokemon");


    }, [])



    return (
        <main>


            {arrayMovies.length > 0 && <HeroBanner movie={arrayMovies[0]} />}



            <h1> Benvenuti</h1>
            {arraySeries.length > 0 && <ListComponent listArray={arraySeries} title={"Lista series"} />}
            {arrayMovies.length > 0 && <ListComponent listArray={arrayMovies} title={"Lista movies"} />}
        </main>

    )
}

export default Home;