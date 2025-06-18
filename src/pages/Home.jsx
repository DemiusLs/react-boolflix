import ListComponent from '../components/ListComponent'
import { GlobalContext } from '../context/GlobalContext'
import { useContext } from 'react'


const Home = () => {

    const { arraySeries, arrayMovies } = useContext(GlobalContext)

    return (
        <main>
            <h1> Benvenuti</h1>
            {arraySeries.length > 0 && <ListComponent listArray={arraySeries} title={"Lista series"} />}
            {arrayMovies.length > 0 && <ListComponent listArray={arrayMovies} title={"Lista movies"} />}
        </main>

    )
}

export default Home;