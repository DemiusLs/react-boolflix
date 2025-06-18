import { BrowserRouter, Routes, Route } from "react-router-dom"
import GuestLayout from './layouts/GuestLayout'
import Home from './pages/Home'


function App() {




  return (
    <>

      <BrowserRouter >
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />


          </Route>
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
