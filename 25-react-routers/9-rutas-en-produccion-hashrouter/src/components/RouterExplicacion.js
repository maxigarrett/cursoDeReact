import React from "react";
import { BrowserRouter as Router, HashRouter, Link, Redirect, Route,Switch} from "react-router-dom";
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
            <h2>Hash Router</h2>
            {/*---------------------------IMPORTANTE----------------------------------
            es lo mismo que Router pero si nosotros mandamos esta app a produccion si el usuario
            guarda una ruta en favorito cuando busque de nuevo esa ruta dara un error porque no
            esta contemplado en el lado del back end. pero si usamos <HashRouter> podremos contemplar
            que el usuario pueda acceder a una ruta especifica guardada en el historial una ves
            esta app este en produccion sin que tire error 404
            (se ejecuta npm run build para que ejecute y cree la carpeta que se llevara a produccion)*/}
            <HashRouter>
                {/* estoseria lo que tendriamos que trabajar en el archivo MenuRouter.js donde
                se mostrara los link a donde quiere ir el usuario */}
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/acerca'>Acerca</Link>
                    <Link to='/contacto'>Contacto</Link>
                </nav>

                {/* esto si va en este archivo */}
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/acerca' component={Acerca}/>
                    <Route exact path='/contacto' component={Contacto}/>
                    <Route path='*' component={Error404}/>
                </Switch>
            </HashRouter>


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

