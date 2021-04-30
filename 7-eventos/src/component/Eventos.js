import React,{Component} from 'react';

class Evento extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0
        }
        // ----------------LEER ATENTAMENTE----------------------------------
        //el bind vincula a la funcion sumar o cualquier funcion el this para que no nos de 
        //undefine a la hs de ejecutar una funcion, llamando a variables del constructor
        //al pasarle el this vincula las variables globales o toda la clase que creamos
        //pero si creamos un objeto y le pasamos this.persona entonces ara referencia a ese obj y
        //no a las variables globales
        //entonces en el boton que tiene el onClick llamamos a esta propiedad que almacena la funcion
        //con el vinculo a las variables globales
        this.sumar=this.suma.bind(this);
    }

    suma(e){
        console.log('SUMAR');
        console.log(this)
        this.setState({
            contador:this.state.contador + 1
        })
    }
    //usando arrow function nos aorramos usar el bind con el this que seria:
    //this.restar=this.suma.bind(this);
    restar=()=>{
        console.log('RESTAR');
        console.log(this)
        this.setState({
            contador:this.state.contador - 1
        }) 
    }
    render(){
        return(
            <div>
                <h1>Evento clic</h1>
                {/*NO PONEMOS LOS PARENTESIS DE LA FUNCION PARA QUE NO SE EJECUTE ANTES DEL CLICK
                al usar el bind llamamos a la propiedad sumar y no a la funcion sumar ya que suma
                esta almacenando la funcion suma*/}
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
                <h2>{this.state.contador}</h2>
            </div>
        );
    }
}
export default Evento;