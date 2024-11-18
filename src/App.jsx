import React from 'react'
import Home from './assets/components/Home/Home'
import { Carrossel } from './assets/components/Carrossel/Carrossel'
import GridImages from './assets/components/GridImages/GridImages'


const App = () => {
  return (
    <div className='container'>
        <Home/>
        <Carrossel/>
        <GridImages/>
    </div>
  )
}

export default App
