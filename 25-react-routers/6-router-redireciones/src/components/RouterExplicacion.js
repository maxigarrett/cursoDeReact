import React from "react";
import { BrowserRouter as Router, Redirect, Route,Switch} from "react-router-dom";
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
                    <Route exact path='/usuario/:userName/:age' component={Usuario} />
                    <Route exact path='/productos' component={Productos} />

                    {/*con Redirect redireccionamos dentro del componente Route y le decimos donde
                    tiene que ir y este nuevo link se redirigira a acerca cuando agamos clic en el link*/}
                    <Route exact path='/about' >
                        <Redirect to='/acerca'/>
                    </Route>
                    <Route exact path='/contact'>
                        <Redirect to='/contacto'/>
                    </Route>
                    <Route path='*' component={Error404}/>
                </Switch>
            </Router>
        </>
    )
}

