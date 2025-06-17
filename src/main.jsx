import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  globalContextProvider } from './context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <globalContextProvider >
      <App />
    </globalContextProvider >
  </StrictMode>,
)
