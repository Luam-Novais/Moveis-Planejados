import React from 'react'
import Home from './components/Home/Home'
import { Carrossel } from './components/Carrossel/Carrossel'
import GridImages from './components/GridImages/GridImages'
import Perguntas from './components/Perguntas/Perguntas'
import Localizacao from './components/Localizacao/Localizacao'
import Contato from './components/Contato/Contato'


const App = () => {
  return (
    <div className='container'>
        <Home/>
        <Carrossel/>
        <GridImages/>
        <Perguntas/>
        <Contato/>
        <Localizacao/>
    </div>
  )
}

export default App
