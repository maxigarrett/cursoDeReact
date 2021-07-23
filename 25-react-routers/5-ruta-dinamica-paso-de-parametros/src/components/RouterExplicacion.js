import React from "react";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import { Acerca } from "../pages/Acerca";
import { Contacto } from "../pages/Contacto";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";
import { Productos } from "../pages/Productos";
import { Usuario } from "../pages/Usuario";
import { MenuRouter } from "./MenuRouter";


//CON BUENAS PRACTICAS
//DIFERENTES FORMAS DE CREAR RUTAS 
export const RouterExplicacion=()=>{
    return(
        <>
            <Router>
                <MenuRouter/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/acerca' component={Acerca}/>
                    <Route exact path='/contacto' component={Contacto}/>
                    {/*Cuando le pasamos parametros dinamicos se hace despues de la barra y despues
                        los dos puntos ej to='/usuario/:userName/:edad'
                    esto creara un objeto con la propiedad userNAme y age con su valores que le pasemos
                    por la url y en el archivo Usuario.js captura esas propiedades con useParam()
                    o mejor dicho captura los parametro que le pasemos a la Url*/}
                    <Route exact path='/usuario/:userName/:age' component={Usuario} />
                    
                    
                    <Route exact path='/productos' component={Productos} />
                    <Route path='*' component={Error404}/>
                </Switch>
            </Router>
        </>
    )
}

