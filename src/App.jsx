import { useState } from 'react'
import './App.css'
import CargaDeDatos from './componentes/cargaDeDatos/cargaDeDatos.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CargaDeDatos/>
    </>
  )
}


export default App
