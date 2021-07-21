import React from "react";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import { Acerca } from "../pages/Acerca";
import { Contacto } from "../pages/Contacto";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";
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
                    <Route path='*' component={Error404}/>
                </Switch>
            </Router>
        </>
    )
}

