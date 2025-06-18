import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './context/GlobalContext'
import SearchBar from './components/SearchBar'
import CardComponent from "./components/CardComponent"


function App() {

  const { arrayList, arrayMovies } = useContext(GlobalContext)


  return (
    <>
      <main>

        <div>

          <SearchBar />

          <div>

            <h2 className='text-center my-4'>Lista serie </h2>

            <div className="container text-center">

              <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">

                {arrayMovies.map((curMovie, index) => (

                  < div className="col" key={index} >

                    <CardComponent listElement={curMovie} />

                  </div>

                )

                )}

              </div>
            </div>
            <h2 className='text-center my-4'>Lista film </h2>

            <div className="container text-center">

              <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">

                {arrayList.map((curMovie, index) => (

                  < div className="col" key={index} >

                    <CardComponent listElement={curMovie} />

                  </div>

                )

                )}

              </div>
            </div>
          </div>


        </div>

      </main >
    </>
  )
}

export default App
