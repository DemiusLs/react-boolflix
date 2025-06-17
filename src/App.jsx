import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './context/GlobalContext'


function App() {

  const { tryvar } = useContext(GlobalContext)

  useEffect(() => {

    console.log(tryvar)
  }, [])


  return (
    <>
      <h1>{tryvar}</h1>
    </>
  )
}

export default App
