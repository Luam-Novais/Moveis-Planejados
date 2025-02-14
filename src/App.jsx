import React, { useRef } from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { Carrossel } from './pages/Carrossel';
import GridImages from './pages/GridImages';
import Perguntas from './pages/Perguntas';
import Localizacao from './pages/Localizacao';
import Contato from './pages/Contato';

const App = () => {

  return (
    <div className="container">
      <Home />
      <Carrossel />
      <GridImages />
      <Perguntas id={'perguntas'} />
      <Contato id={'contato'} />
      <Localizacao id={'localizacao'} />
    </div>
  );
};

export default App;
