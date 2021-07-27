import React from "react";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Error404 } from "../pages/Error404";
import { Login } from "../pages/Login";
import { MenuRouter } from "./MenuRouter";
import { PrivateRoute } from "./PrivateRoute";

export const RouterExplicacion=()=>{
    return(
        <>
            <Router>
                <MenuRouter/>
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    {/*remplazamos esta ruta publica por una privada creando un componente <PrivateRoute>
                     lo llamamos como querramos*/}
                    {/* <Route exact path='/dashboard' component={Dashboard}/>*/}
                    <PrivateRoute exact path='/dashboard' component={Dashboard}/>
                    <Route path='*' component={Error404}/>
                </Switch>
            </Router>
        </>
    )
}

