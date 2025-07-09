import { BrowserRouter, Routes, Route } from "react-router-dom"
import GuestLayout from './layouts/GuestLayout'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'


function App() {

  return (
    <>

      <BrowserRouter >
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />


          </Route>
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
