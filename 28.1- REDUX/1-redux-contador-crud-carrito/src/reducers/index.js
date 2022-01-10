//CENTRALIZARA TODOS LOS REDUCERS
import { combineReducers } from "redux";
import { contadorReducers } from "./contadorReducers";
import { shopingCarReducer } from "./shopingCarReducer";



//en combine reducers recibira todos los reducer y los pasaremos como propiedades de un solo objeto
//asi combinaremos todo en una sola variabele
 export const reducers= combineReducers({
     contador:contadorReducers,
     shoping:shopingCarReducer
})