/*Las ruttas o ROUTER sirven por ejemplo mas que nada para usar en elementos de navegacion
osea en el NAV para mostrar de manera dinamica la pag de contacto home,etc
hay diferentes de formas de crear rutas una mas liosas que otras y otras mejores:
*/
import React from "react";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import { Acerca } from "../pages/Acerca";
import { Contacto } from "../pages/Contacto";
import { Error404 } from "../pages/Error404";
import { Home } from "../pages/Home";

//DIFERENTES FORMAS DE CREAR RUTAS  ABAJO DE TODO ESTA ECHO CON BUENAS PRACTICAS
/*export const RouterExplicacion=()=>{
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path='/'>
                    {/*Podemos escribir JSX dentro del componente Route directamente }
                        <h3>Home</h3>   
                        <p>Bienvenidos al temas de rutas de React</p>
                    </Route>
                   
                    <Route exact path='/acerca'>  
                    {/*---------------------------IMPORTANTE--------------------------------
                    Podemos escribir JSX y/o llamar componentes. es mejor llamar a componentes que
                    escribir dentro de los Route directamente 
                        <Acerca/>
                        <p>sdmnfmsndmfnsdnfjsndjfnsjkdnfjsndjfnsjdnfjnsjdsdf
                            sdjfnsdnfjsndfjsndjfnjskdnfjsnjdfnsjnfjsnjdfsndf
                            fsdjfnsjdnfjksdnjkfsdnfkjdsnfjnsdjfnjksdnfjnsdjf
                        </p>
                    </Route>
                    {/*con buenas practicas}
                    {/*---------------------------IMPORTANTE--------------------------------
                    de la forma correcta es llamar con la prop components y dentro de las llavas
                    llamar al componente en este caso CONTACTO pero como si fuera funcion ya que el 
                    componente es una funcion en si.}
                    <Route exact path='/contacto' component={Contacto}/>

                    {/*---------------------------IMPORTANTE--------------------------------
                    Otra forma es unar la prop childre y aca si tenemmos que llamar entre llaves
                    como llamamos a un componente normal osea <Contacto/> y dentro podemos escribir
                    si queremos mas codigo pero no es recomendable lo mejor es escribir directamente
                    en el archivo que estamos llamando aca de forma de componente
                    es valido como usar la propiedad COMPONENT o CHILDREN.
                    para escribir mas codigo dentro de children tenemos que utilizar fragmento<></> }
                    <Route exact path='/contacto' children={<Contacto/>}/>
                </Switch>
            </Router>
        </>
    )
}
*/

//CON BUENAS PRACTICAS
//DIFERENTES FORMAS DE CREAR RUTAS 
export const RouterExplicacion=()=>{
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/acerca' component={Acerca}/>
                    <Route exact path='/contacto' component={Contacto}/>
                    {/*---------------------------IMPORTANTE-------------------------
                    para la ruta de error por no encontrar la ruta scaremos el exact para que funcione
                    si no no entraria porque tendriamos que escribir en el navegador es asterisco.tendremos
                    que ubicar este Route abajo de todo por la jerarquia al no tener exact la ruta mas 
                    generica es la que va abajo para evitar que aprezca siempre.(simpre abajo de todo el error)
                    el asterizco(*) indica que cualquier ruta va a cargar el error pero las demas
                    no las carga por el exact asique si escribimos cualquier cosa que no sea lo que esta
                    en el PATH de las demas Route vendra a tirar el error 404 del archivo Error404.js*/}
                    <Route path='*' component={Error404}/>
                </Switch>
            </Router>
        </>
    )
}

