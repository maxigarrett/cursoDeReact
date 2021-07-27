import {React} from 'react';
import { Redirect, Route } from 'react-router-dom';

// Las rutas privadas lo que retornamos es un Route
// 1 FORMA DE HACERLO
/*export const PrivateRoute=({path,component})=>{ 
    return(
        <>
            <Route exact path={path} component={component}/>
        </>
    )
}*/

// 2 FORMA
/*export const PrivateRoute=(props)=>{
    return(
        <>
            <Route exact path={props.path} component={props.component}/>
        </>

    )
}*/

// 3 FORMA MAS SIMPLIFICADA
// export const PrivateRoute=(props)=>{
//     return <Route {...props}/>
// }


// SIMULAMOS AUTETIFICACION DE LOGIN YA QUE TENDRIAMOS QUE USAR BACKEND Y ES CURSO DE REACT

// ---------------------------IMPORTANTE-----------------------------------------
//extraemos el parametro que necesitamos manipuar y lo demas lo dejamos con el expreat operator
//como component no trae un componente pero viene en minusculas para que no de error le damos un alias
//asi component :Component
export const PrivateRoute=({component :Component,...props})=>{
    // ------------------------------IMPORTANTE--------------------------------
    //component es una funcion que retorna algo. para aceder a Component si mostramos por consola mostrara
    // una funcion que devuelve un booleano para acceder a ese return tendremos que llamarla como funcion
    //y guardarla en variable y si esto fuera un formulario y delvieramos true o false dependiendo de su
    //autentificacion redirigiriamos al login si viene false sino mostrara component o calquier otro
    //componente
    const validate=Component().props.children[0]
    console.log(validate)
    return(
        <>
            <Route {...props}>
                {/*--------------------------importante-------------------------------
                si la variable auth es true mostrara dashboard pero como se lo pasamos como props
                y ese props components en la ruta hace referencia a un componente lo pondremos
                 asi <component> de lo contrario que rediriga a login
                 entonces si hacemos una validacion real y el usuario nunca se autentica simpre vendra
                 al login por mas que copiemos la ruta directamente en la url
                 pondriamos component o cualquier otro componete a mostrar*/}
                {validate ? <Component/> : <Redirect to='/login' />}
            </Route>
        </>
    )
}