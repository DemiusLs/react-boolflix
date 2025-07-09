import ListComponent from '../components/ListComponent'
import { GlobalContext } from '../context/GlobalContext'
import { useContext, useEffect } from 'react'


const Series = () => {

    const { arraySeries, searchSeries } = useContext(GlobalContext)

    useEffect(() => {

        searchSeries("Mare");
        

    }, [])



    return (
        <main>

            

            <h1> Serie</h1>
            {arraySeries.length > 0 && <ListComponent listArray={arraySeries} title={"Lista series"} />}
            
        </main>

    )
}

export default Series;