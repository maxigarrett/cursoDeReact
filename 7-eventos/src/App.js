import logo from './logo.svg';
import './App.css';
import {EventoES6,EventoES7} from './component/Eventos';
import {EventosSinteticosYPersonalizados} from './component/EventosSinteticosYPersonalizados';

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
      <EventoES6></EventoES6>
      <hr></hr>
      <EventoES7></EventoES7>
      <hr></hr>
      <EventosSinteticosYPersonalizados></EventosSinteticosYPersonalizados>
    </div>
  );
}

export default App;
