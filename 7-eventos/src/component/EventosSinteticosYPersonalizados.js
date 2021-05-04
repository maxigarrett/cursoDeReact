import React,{Component} from 'react';

//como pasar evento a un componente es crear una props y pasarle es prop en el onclick.
//despues llamaremos al compoenente y le pasaremos la prop que esa props en este caso tiene
// una funcion saludar()
// <Boton MyOnClick={(e)=> this.handleClick(e,'parametros desde componente en evento')}></Boton>
const Boton =(props)=>{
    return(
        <button onClick={props.MyOnClick}>Boton hecho con componente</button>
    );
}
//otra forma es destructurando
/*const Boton =({MyOnClick})=>{
    return(
        <button onClick={MyOnClick}>Boton hecho con componente</button>
    );
}*/
export class EventosSinteticosYPersonalizados extends Component{

    handleClick=(e,msg)=>{
        // el SyntheticBaseEvent envulve el evento que se dispara en el navegador para darle soportte
        // a todos los navegadores.Los eventos mas utilizados estan soportados por react
        console.log(e)
        // pero si queremos el evento nativo que en verdad se origina ponemos nativeEvent que
        //disparara el evento nativo osea el evento de vanilla JS
        console.log(e.nativeEvent)

        console.log(msg)
    }
    render(){
        return(
            <>
                <h2>Eventos sint</h2>
                {/* -----------------------LEER IMPORTANTE----------------------------- */}
                {/* handdle se usa en react y significa manejar, se usa en funciones 
                cuando a la funcion le pasamos mas parametros aparte del evento "e" en el onclic devemos
                crear una arroe function onClick={(e)=> this.handleClick(e,'hola')} y pasarle
                por parametro el evento e para que no tire error ya que el que maneja el evento ahora
                es la arrow function del evento clcic y no la funcion en si y de esta forma le pasamos
                parametros al evento click , si creamos mas paramtros se lo pasamos al handleClick*/}
                <button onClick={(e)=> this.handleClick(e,'parametros desde evento')}>Saludar</button>
                
                
                {/* -------------IMPORTANTE----------------------------
                el evento como onclic como el anteriror de arriba no funcionara porque solo 
                funciona en sintaxis JSX(html), pero no en componentes, para que funcione en 
                compoenentes se usa EVENTO PERSONALIZADO que esto no es mas que crear una prop que
                se la pasamos al componente*/}
                <Boton MyOnClick={(e)=> this.handleClick(e,'parametros desde componente en evento')}></Boton>
            </>
        );
    }
}