/*Podemos ahcer colecciones de elementos e incluirlos en JSX usando llaves {}.
Recorriendo los elementos de un array y usando la funcion map() de js por ej:
    const numeros=[1,2,3,4,5];
    cons listaNumeros=numeros.map(num=><li>{numero}</li>)

incluimos este linstaNumeros  den tro de un elemento <ul> y lo renderizamos:
    React.DOM.render(<ul>listaNumeros</ul>,document.getElementById('root'))
*/

import React,{Component} from 'react';
import Lista from './lista';
import data from '../helpers/dataFrameworks.json';

class RenderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state={
            stations:['primavera','verano','otonio','invierno']
        }
    }
    render(){
        return(
            <>
            {console.log(data.framework)}
                <h2>renderizado de elementos</h2>
                <h3>Estaciones</h3>
                <ul>
                    {/*REACT pide internamente que le pasemos una key a cada lista pero es inexistente
                    en el doc html esto lo usa solo react para detectar cada elemento que va renderizando*/}
                    {this.state.stations.map((ele,i)=>
                        <li id={i+1} key={ele}>{ele}</li>)
                    }
                </ul>
                <h3>Datos de JSON Framework</h3>
                {/*trameos de un json simulando info de una API u BBDD y recorremos ese JSON dentro
                de un <ul> luego llamamos a un componente que tiene los <li> y le pasamos las props
                con los datos del json que recorremos*/}
                <ul>
                    {data.framework.map(el=>
                        <Lista key={el.id} msgLink={el.web} msg={el.name}></Lista>)
                    }
                </ul>
            </>
        )
    }
}

export default RenderizadoElementos;