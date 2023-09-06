import { useState } from 'react'
import './App.css'
import CargaDeDatos from './componentes/CargaDeDatos/cargaDeDatos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CargaDeDatos/>
    </>
  )
}

export default App
