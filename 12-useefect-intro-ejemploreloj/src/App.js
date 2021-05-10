import logo from './logo.svg';
import './App.css';
import ScrollHooks from './components/ScrollHooks'
import RelojHooks from './components/relojHooks'
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
        <ScrollHooks></ScrollHooks>
        <RelojHooks></RelojHooks>
    </div>
  );
}

export default App;

