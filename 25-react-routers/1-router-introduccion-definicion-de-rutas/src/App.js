import React from "react";
import { RouterExplicacion } from "./components/RouterExplicacion";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Router </h1>
      </header>
      <a 
        href='https://reactrouter.com/web/guides/quick-start' 
        target='_blank' 
        rel="noreferrer">
          Documentacion
      </a>
      <hr/>
      <RouterExplicacion/>
    </div>
  );
}

export default App;
