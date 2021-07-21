/*--------------------------IMPORTANTE-------------------------------------
para poder utilizar react router es necesario instalar REACT WEB ya que existe dos:
REACT NATIVE: desarrollar app nativas con react para celulares IOS ,etc (esta no)
    
REACT WEB: que es para desarrollar app web con reac  npm install react-router-dom.
tenemos que importar browserRouter y Route. ROUTE es una ruta que le podemos definir como propiedad
a el componente ROUTE pa que muestre el HTML segun busquemos en la ruta del navegador. al componente
la propiedad que recibe es PATH y le pasamos la ruta del navegador
por el navegador. ej:
               <Route exact path='/'> la barra indica la raiz del documento osea la pag principal
                    <h2></h2>
                </Route>
entonces en el navegador mostrara la ruta principal y como estamos en servidor local sera
http://localhost:3000 ese es el path="/". si queremos que muestre path="/acerca" en el navegador 
pondremos http://localhost:3000/acerca y mostrara ese componente con el html.
el EXACT es para que muestre la ruta exacta que le indiquemos porque sin eso muestra la primer coincidencia
que encuentre en el path y como todos empiezan con "/" simpre mostrara la raiz. por eso react dice
que poingamos las rutas mas genericas abajo del todo osea path="/" y las mas absolutas osea 
path="/acerca" mas arriba para evitar ese conflicto pero si queremos poner todo como nosotros queremos
entonces con exact solucionamos todo.

por ultimoo las route tienen que ir encerradas en un componente switch es como si cada CASE del SWITCH
fuera el componente ROUTE. el switch tiene que ser comoponente no la estructura de control.
*/

import React from "react";
//como el nombre es largo por buenas practicas le damos un alias de Router
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";

export const RouterExplicacion=()=>{

    return(
        <>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <h2>HOME</h2>
                    </Route>
                    <Route exact path='/acerca'>
                        <h2>ACERCA</h2>
                    </Route>
                    <Route exact path='/contacto'>
                        <h2>CONTACTO</h2>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

