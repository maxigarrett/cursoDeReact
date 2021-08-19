import { React,createContext } from "react";
import { useState } from "react";
//creamos un contextos con la funcion createContext
//-------------------------------IMPORTANTE--------------------------------------------------
/*createContext internamente tiene dos objetos un provaider y consumer.
provaider:sirve para darle valor inicial a las variables de estado que seran globales
consumer:nos permitira consumir los valores que da el provaider,es decir,obtener los valores de las
        variables de estado.pero desde que se crearon los hooks el consumer fue remplazado por useContext
        por eso vamos a consumir los datos desde el HOOK useContext

Esto funciona parecido que las rutas, ya que hay que envolver a los componentes que requieran estas 
variables globales y asi podran usarlas en cualquier componentes que la requiera,es parecido a las rutas
porque los componentes que dependan de el createContext se envolveran dentro.
 */

//seria el consumer que lo remplaza el useContext llamarlo con mayuscula donde se almacenara ya que
//despues lo llamaremos como componente
export const ThemeContext=createContext()
let initilTheme='light';

//provaider va ser el contenedor que envuelva a todos los componentes de nuestra app que necesiten
//los valores que querramos compartir entre ellos. Por eso children hace referencia a los hijos
//que va a tener este ThemeContext.provaider osea los componentes que necesiten la misma variable de
// estado a consumir
export const ThemeProvaider=({children})=> {
    const[theme,setTheme]=useState(initilTheme)
    
    //input radio
    const handelTheme=(e)=>{
        const {value}= e.target
        console.log(value)
        value === 'light'? setTheme(value) : setTheme(value)
    }

    //las variables que se repetiran en varios compnentes es mejor meterlas dentro de un obj y pasarlas
    //como props a el provaider podremos llamarlo como queramos yo le puse value
    let data={theme,handelTheme}
    return(
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}

