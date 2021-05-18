/*una de las formas de trabajr con css es que los componentes o archivos JS que tengamos al importar
el css le pongamos el mismo nombre que a el componente para identificarlo ej:
header.js y header.css

las clases en JSX se declaran como className a diferencia de html que es class.

cuado hagamos un npm run bild se creara la carpeta con la app lista para subir a produccion 
con los estilos un un solo archivo css. porque en fase de desarrollo nuestros css estan todos
en diferentes archivos

las propiedades se escriben con uppercamelcase en ves de border-radius seria borderRadius

formas de trabar con el es:
 1-con hoja de estilos externas

 2-estilos en linea: se llaman entre llavas porque es una expresion javascript y despues abrimos
  denuevo llaves porque se trabaja de forma de objeto los estilos
 
  3- trabajar los estilos con variables

 4-para agregar la hoja de estilos normalize en React solo tenemos que poner @import-normalize 
 por ejemplo iria en como esta el proyecto por defecto en index.css que son estilos por defecto
 que trae React en la app que descarga

 5-estilos como modulos. el archivo lo llamaremos igual que el JSX pero con la palabra module 
 ej: Estilos.module.css, esto permite crear una variable almacenando todos los estilos es esa
 variable cuando importamos en este caso seria por ejemplo si queremos acceder a la clase error:
    moduleStyles.error (esa seria la forma de llamar) y quedaria  className={moduleStyles.error}

6-otra forma es utilizando SCSS en la terminal con npm install node-sass podriamos trabajar el scss
como los modules pero las clases tienen que ir sin guiones o no andara sino solo llamando 
la clase que creamo en SCSS normalmente y listo
*/

import React from 'react';
import './Estilos.css';//1
import moduleStyles from'./Estilos.module.css';//5
import moduleSCSS from'./Estilos.module.scss';

export const Estilos=()=>{

    // 3
    const myStyles={
        borderRadius:'2rem',
        marginLeft:'auto',
        marginRight:'auto',
        maxWidth:'50%'
    }
    return(
        <section className='section'>
            <h2>Estilos CSS En React</h2>
            <h3 className='bg-react'>Estilos en hoja CSS externa</h3>

            <h3 className='bg-react' 
                style={{borderRadius:'5px'}}>{/*2*/}
                Estilos CSS en linea
            </h3>

            <h3 className='bg-react'
                style={myStyles}>{/*3*/}
                Estilos en linea con variable CSS
            </h3>
            
            <h3 className={moduleStyles.error}/*5*/>
                Estilos CSS con modulos
            </h3>
            <h3 className={moduleStyles.seccess}/*5*/>
                Estilos CSS con modulos
            </h3>
            <h3 className={moduleSCSS.bgsass}/*6*/>
                Estilos CSS con modulos
            </h3>
        </section>
    )
}