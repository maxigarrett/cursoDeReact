import React from 'react';
import PropTypes from 'prop-types';
const Propiedades=(props)=>{
    return(
        <div>
            <h2>{props.title}</h2>
            <ul>
                {/*El método split() divide una cadena en un array y devuelve el nuevo array. como la cadena tien - busca ese separador
                El método join() devuelve una nueva cadena concatenando todos los elementos de un array.*/}
                <li id={props.cadena.split("-").join('')}>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano?'true':'false'}</li>
                <li>{props.arreglo.join(',')}</li>
                {/*un objeto no se puede mostrar solo llamando a la propiedad sino tambien a las propiedades
                de los objetos como objeto.nombre objeto.correo*/}
                <li>{`${props.objeto.nombre}- ${props.objeto.correo}`}</li>
                <li>{props.elementoReact}</li>
                <li>{props.funcion(3)}</li>
                {/*aca le pasamos el arreglo anterior y lo multiplicamo con la funcion*/}
                <li>{props.arreglo.map(props.funcion).join('-')}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}

//PODEMOS PONER MENSAJES POR DEFECTO Y PASARLOS A LAS ETIQUETAS SIN PONER NADA EN EL Appp.js
//no hace falta acceder a este objeto como propiedades.defaulProps.title. con solo tile ya anda
//ponemos primero el nombre de la funcion(Propiedades).nombre de la propiedad para crear objetos(defaultProps)
Propiedades.defaultProps={
    title:"soy un titulo",
};

//npm i -s prop-types instalando esto en nuestro proyect con esto podemos hacer que las propiedades sean mas 
//rigurosas diciendole que a una propiedad sea de sierto tipo como string,numbre,array,etc
//en caso de usar en la propiedad cadena un numero por consola tirara un warning
//------------------------ATENCION------------------------------------------
// para que funciones despues de lklamar a la funcion no es lo mismo propTypes(sin mayuscula) que cuando 
//llamamos a la importacion arriba de todo de PopTypes
Propiedades.propTypes={
    cadena:PropTypes.string,
    numero:PropTypes.number
}
export default Propiedades;