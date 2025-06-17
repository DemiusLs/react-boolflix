import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './context/GlobalContext'


function App() {




  const { textSearch, setTextSearch, getFilmList, filmArray } = useContext(GlobalContext)


  const [inputVar, setInputVar] = useState("")

  const handleChange = (e) => {

    setInputVar(e.target.value)
  }


  const handleClick = (event) => {
    event.preventDefault();
    setTextSearch(inputVar)


  }

  useEffect(() => {
    textSearch !== "" && getFilmList()

  }, [textSearch])



  return (
    <>
      <main>

        <div>


          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={inputVar} onChange={handleChange} />
            <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
          </form>

          <div>
            <h1 className='text-center my-4'>Lista film </h1>

            <div className="container text-center">

              {filmArray !== null ? (<div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">

                {filmArray.map((curMovie, index) => (

                  < div className="col" key={index}>
                    <div className="card" >
                      {/* <img src="..." className="card-img-top" alt="..." /> */}
                      <div className="card-body">
                        <p className="card-text">{curMovie.name}</p>
                        <p className="card-text">{curMovie.original_name}</p>
                        <p className="card-text">{curMovie.original_language}</p>
                        <p className="card-text">{curMovie.vote_average}</p>
                      </div>
                    </div>
                  </div>

                )

                )}



              </div>) : (<h2> Caricando</h2>)}






            </div>



          </div>



        </div>
      </main>
    </>
  )
}

export default App
