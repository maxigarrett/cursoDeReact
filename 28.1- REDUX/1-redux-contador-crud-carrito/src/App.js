import { Provider } from "react-redux";
import { Contador } from "./components/Contador";
import { CrudApp } from "./components/CrudApp";
import { ShoppingCar } from "./components/ShoppingCar";
import { store } from "./store";


function App() {
  return (
    // este provider compartira su estado a todo lo que se encuentre dentro de el es como el Provider de usecontext
    <Provider store={store}>
      <>
        <h1>Redux</h1>
        <CrudApp/>
        <br/>
        <Contador/>
        <br/>
        <ShoppingCar/>
      </>
    </Provider>
  );
}

export default App;
