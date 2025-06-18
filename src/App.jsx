import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './context/GlobalContext'
import SearchBar from './components/SearchBar'
import CardComponent from "./components/CardComponent"
import ListComponent from './components/ListComponent'


function App() {

  const { arraySeries, arrayMovies } = useContext(GlobalContext)


  return (
    <>
      <main>

        <div>

          <SearchBar />

          {arraySeries.length > 0 && <ListComponent listArray={arraySeries} title={"Lista series"} />}


          {arrayMovies.length > 0 && <ListComponent listArray={arrayMovies} title={"Lista movies"} />}




        </div>

      </main >
    </>
  )
}

export default App
