import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './context/GlobalContext'


function App() {




  const { textSearch, setTextSearch, getFilmList } = useContext(GlobalContext)


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
          <form action="">

            <input type="text" value={inputVar} onChange={handleChange} />
            <button onClick={handleClick}>Richiesta</button>

          </form>


        </div>
      </main>
    </>
  )
}

export default App
