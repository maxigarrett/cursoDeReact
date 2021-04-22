import React from "react";//no se importa cuando creamos el proyecto pero se pone por buenas practicas
import logo from './logo.svg';
import Componente from'./componentes/Components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Componente msg="hola soy un componente con arrow function"></Componente>
      <Componente msg="hola"></Componente>
    </div>
  );
}

export default App;
