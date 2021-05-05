/*                           CICLO DE VIDA DE LOS COMPONENTES

son metodos(funciones) que se ejecutan automaticamente en un componente de clase. ocurre en 3 fases:
    1-Montaje: Estos metodos se ejecutan cuando se crea un componente y se inserta en el arbol del 
    DOM.CONSTRUCTOR(se ejecuta al crear la intancia del componente,se inicializa el estado y enlazar
    manejadores de eventos, los componentes no se inicializan en el DOM).RENDER(unico metodo 
    requerido,examina el estado y propiedades y dibuja en el DOM).ComponentDiaMount()(Se invoca 
    inmediatamente despues de que un componente se inserta en el DOM. Util para ejecutar peticiones 
    asincronas)

    2-Actualizacion: Estos metodos son ejecutados por cambio en el estado o las propiedades de los
    componentes.osea,se ejecuta cuando tiene que renderizar algo porque se modifico.RENDER(redibuja
    el componente al detectar cambios en el estado o las propiedades del componente).
    ComponentDidUpdate(Se ejecuta inmediatemente despues de que la actualizacion del estado o 
    propiedades, metodo ideal para hacer peticiones externas)
    
    3-Desmontaje: Estos metodos son ejecutados una vez que el componente ah sido eliminado del DOM.
    ComponentWillUnmount(Se ejecuta antes de destruir un componente del arbol del DOM, metodo util
    para ralizar tareas de limpieza)

    --------------------------IMPORTANTE---------------------------------
    A-primero se inicializa el contructor
    B-despues pasa el render para cargar todo en el DOM 
    C-depues de cargar al dom todo por el render, se ejecuta si hay el metodo de react componentDidMount
    para cargar peticiones AJAX o cualquier cosa que requiera que los elementos ya esten insertados
    en el DOM
    ---------------------------------------------------------------------

    */

import React,{Component} from 'react';
class Reloj extends Component{
    constructor(props){
        super(props)
    }
    
    componentWillUnmount(){
        console.log(3,'componente eliminado del DOM')
    }
    render(){
        return(
            <h3>{this.props.hs}</h3>
        );
    }
}
export default class CicloVida extends Component{
    constructor(props){
        console.log(0,'El componente se inicializa pero no esta en el DOM')
        super(props)

        this.state={
            hora:new Date().toLocaleTimeString(),//da el formato legible en HS
            visible:false//para eliminar el componente Reloj si esta en false
        }
        this.temporizador=null

    }

    //metodo o funcion que trea REACT Pertenece al Montaje
    //React recominda utilizar esto para realizar peticiones AJAX ya que si pintamos informacion en
    // el DOM el constructor cuando se inicializa no est`a pintando el dom por eso se usa esta FUCI.. 
    componentDidMount(){
        console.log(1,'el componente ya se escuentra en el DOM')
    }

    // ---------------------IMPORTANTE----------------------------------------
    //permite pasar propiedades previas o estados previos por si necesito trabajar con esos valor
    //antes de actualizar el nuevo estado o propiedades
    //recibe dos parametros, el objeto de estado y props previas
    //para capturar esas variables de estado y props si queremos modificarlas antes de madarlas
    //al metodo render para que las pinte al DOM
    componentDidUpdate(prevProps,preState){
        console.log(2,'el estado o las props del componente a cambiado y se redibuja')
        console.log(preState.hora,prevProps)//muestra la hs modificada
    }



    //funcion que cada 1s trae fecha actual y modifica el state.hora
    ticTac=()=>{
        this.temporizador=setInterval(()=>{
            this.setState({
                hora:new Date().toLocaleTimeString()
            })
        },1000)
    }
    iniciar=()=>{
        this.ticTac();
        this.setState({
            visible:true
        })
    }
    detener=()=>{
        clearInterval(this.temporizador);
        this.setState({
            visible:false
        })
    }
    render(){
        console.log(`${4}`,'el componente se dibuja o redibuja por cambios en el DOM')
        return(
            <>
                <h2>Ciclo de vida de los componetes de clase</h2>
                {/* <h3>{this.state.hora}</h3> */}
                {this.state.visible?<Reloj hs={this.state.hora}></Reloj>:null}
                <button onClick={this.iniciar}>inicar</button>
                <button onClick={this.detener}>detener</button>
            </>
        )
    }
}