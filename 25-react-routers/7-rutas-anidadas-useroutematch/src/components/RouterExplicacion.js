import React from "react";
import { BrowserRouter as Router, Redirect, Route,Switch} from "react-router-dom";
import { Acerca } from "../pages/Acerca";
import { Contacto } from "../pages/Contacto";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";
import { Productos } from "../pages/Productos";
import { ReactTopics } from "../pages/ReactTopics";
import { Usuario } from "../pages/Usuario";
import { MenuRouter } from "./MenuRouter";

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

                    <Route exact path='/about' >
                        <Redirect to='/acerca'/>
                    </Route>

                    <Route exact path='/contact'>
                        <Redirect to='/contacto'/>
                    </Route>

                    {/*el excat se lo sacamos para que ande porque van a venir del componete ReactTopic
                    sub rutas dinamicas*/}
                    <Route path='/react' component={ReactTopics}/>
                    <Route path='*' component={Error404}/>
                </Switch>
            </Router>
        </>
    )
}

