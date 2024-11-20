import React from 'react'
import Home from './assets/components/Home/Home'
import { Carrossel } from './assets/components/Carrossel/Carrossel'
import GridImages from './assets/components/GridImages/GridImages'
import Perguntas from './assets/components/Perguntas/Perguntas'
import Localizacao from './assets/components/Localizacao/Localizacao'


const App = () => {
  return (
    <div className='container'>
        <Home/>
        <Carrossel/>
        <GridImages/>
        <Perguntas/>
        <Localizacao/>
    </div>
  )
}

export default App
