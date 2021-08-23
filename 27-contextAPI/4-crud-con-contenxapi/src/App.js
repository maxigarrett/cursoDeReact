import {CrudApp} from './component/CrudApp'
import { CrudProvider } from './context/CrudContext';
function App() {
  return (
    <CrudProvider>
      <div className="App">
        <CrudApp></CrudApp>
      </div>
    </CrudProvider>
  );
}

export default App;
