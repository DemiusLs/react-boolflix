import { useContext, useState } from 'react'
import { GlobalContext } from './context/GlobalContext'


function App() {

  const { tryvar } = useContext(GlobalContext)


  return (
    <>
      <h1>{tryvar}</h1>
    </>
  )
}

export default App
