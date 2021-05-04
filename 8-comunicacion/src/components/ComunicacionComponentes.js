/*La comunicacion entre comp[oenentes tenmos tres tipos
    1-comunicacion entre componentes entre padre a un hijo(a travez del paso de las props)
    2-Comunicacion entre un componente hijo y su padre(ya visto 7-eventos dnde boton ejecuta funcion)
    3-Comunicacion entre componentes no relacionados
    osea entre padres y nietos como poe ejemplo modificar el state de un padre apra cambiar la 
    pagina de color claro a oscuro para eso existen libreria como Redux y Context(recomendable
    porque es una libreria interna de REact que provee una forma de pasar datos a travez del arbol
    de componentes sin tener que pasar props manualmente )es decir compartir variables que no sea
    directamente padre a hijo.(mas a delante veremos context)
*/
import React,{Component} from 'react';

// 1
const Hijo=(props)=>{
    return(
        <>
            <h3>{props.mensaje}</h3>

            {/* 2 aumntamos el state contador del padre a travez de evento del hijo */}
            <button onClick={props.MyOnClick}>+</button>
        </>
    );
}
export default class Padre extends Component{
    state={
        contador:0
    }
    IncrementarContador=()=>{
        this.setState({
            contador:this.state.contador +1
        })
    }
   render(){
       return(
        <>
            {/* 1 */}
            <h2>Comunicacion entre componentes</h2>
            <Hijo mensaje='mensaje para hijo 1'></Hijo>

            {/* 2- incrementa el sate.contador del padre a travez de evento de un hijo mediante
            la funcion IncrementarContador */}
            <Hijo MyOnClick={this.IncrementarContador} mensaje='mensaje para hijo 2'></Hijo>
            <p>{this.state.contador}</p>
        </>
       )
   }
}
