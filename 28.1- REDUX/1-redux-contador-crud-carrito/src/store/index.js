// este archivo hace referencia al store es decir al contenedor global de todos los estados de nuestra aplicacion
import { createStore } from "redux";

import { reducers } from "../reducers";//traemos todos los reducer combinados

//esto se lo pasa al store como ya un solo reducer todo combinado y se lo pasamos al provider
// en APP.js para compartir el estado de estos reducers
export const store=createStore(reducers) 

//el metodo subscribe esta escuchando cualquier cambio en el estado.
store.subscribe(()=>console.log(store));
