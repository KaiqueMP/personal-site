import React from 'react';
import './App.css';
import Menu from './pages/Header/Menu.js'
import Inicio from './pages/Inicio/Inicio.js'
import Sobre from './pages/sobre/sobre';

function App() {
  return (
    <div>
      <Menu />
      <Inicio />
      <Sobre />
    </div>
  );
}

export default App;
