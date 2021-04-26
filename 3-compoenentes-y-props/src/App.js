import logo from './logo.svg';
import './App.css';
//puede ir cualquier nombre  despues del import
import Componentes from './componentes/componentes';
import Propiedades from './componentes/Props';

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
      <section>
        <Componentes msg="hola soy un componente con arrow function"></Componentes>
      </section>
      <section>
        {/*esta etiqueta propiedades(componente) se deberia llamar de forma mas distintiva como header,title,etc*/}
        <Propiedades 
          cadena="cadena-de-texto" 
          numero={19}
          booleano={true}
          arreglo={[1,2,3]}
           //en el objeto primero van las llaves para indicar que va a ir sintaxis JS y despues las llaves
           //de llos objetos
          objeto={{nombre:'maxi',correo:'maxi@gmail.com'}}
          funcion={(num)=>num*2}
          elementoReact={<i>Esto es un elemento react</i>}//podemos escribir como valor de propiedad JSX 
          componenteReact={<Componentes msg='soy componente pasado como porop'></Componentes>}
        >
        </Propiedades>
      </section>
    </div>
  );
}

export default App;
