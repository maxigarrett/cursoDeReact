//import React,{Component} from "react"; //para cuando utilizamos clases

//como funcion esto seria el componente
const Componente =(props)=>{
    return <h1>{props.msg}</h1>//se puede llamar varias veces con diferentes mensajes
}
//como clase
/*class Componente extends Component{
    render(){
        //el atributo creado donde llamaos esta funcion le pasamos una propiedad msg y para que funcione
        //tambien debemos poner dentro de las etiquetas this.props.msg  this(referencia) props(propiedad) 
        //msg(atributo asignado en App.js para pasarle un mensaje)
      return  <h2>{this.props.msg}</h2>
    }
}*/

export default Componente