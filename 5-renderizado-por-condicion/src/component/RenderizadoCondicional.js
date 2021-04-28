/*el renderizado es cuando un valor de estado o de las propiedades (props) de nuestro componente
cambian y esto abliga a repintar la interfaz.*/
import React, {Component} from 'react';

//simpre con mayuscula la primera letra para que ande
const Login=()=>{
    return(
        <h3>Login</h3>
    )
}
const Logout=()=>{
    return(
        <h3>Logout</h3>
    )
}

//podemos crear una variable de estado y en base a su valor podemos mostrar un componente u otro
//osea loguin o logout
class RenderizadoCondicional extends Component{

    constructor(props){
        super(props);
        this.state={
            session:true
        }
    }
    render(){
        return(
            <>
                <h2>Renderizado condicional</h2>
                {/*como la variable session es true solo mostrara el componente loguin*/}
                {this.state.session ? <Login></Login>:<Logout></Logout>}
            </>
        );
    }
}

export default RenderizadoCondicional;