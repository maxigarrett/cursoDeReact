/* para poder usar styled component necesitamos intalar en por la terminal
 npm install --save styled-components
 
 estos tipos de estilos se escriben en template string y para que se vea del color como cuando
 se poenen estilos en el css descargaremos 
 el sniped: vscode-styled-components 
 creado por: Julien Poissonnier
 
 llamamos a styled component : import styled from 'styled-components'
 css- para agregar varias propiedades a una etiqueta igual a la que creamos primero
 keyframe- para las animaciones
 ThemeProvider- es una caja que contiene variables de obj con valores css
 createGlobalStyle- para crear estilos globales esto iria en app o index js como tenemos estructurado
 por defecto este proyecto osea los archivos principales ya que se resetean los estilos de la aplicaion*/
import React from 'react';
import styled,{css,keyframes,ThemeProvider,createGlobalStyle} from 'styled-components';

export const ComponentesEstilizados =()=>{
    // podemos crear variables por ejemplo para los colores y como lo ponemos dentro de 
    // styledComponent va dentro de un template string por lo que usaremos ${MainColor}
    let MainColor='#db7093';
    let MainAlfaColor89='#db709380';

    //funcion que aplica una transicion al bacgraund por si queremos repetir esta transicion
    const setTransitionTime=(time)=>{
        return(
            ` background-color ${time}`
        )
    }

    const fadein= keyframes`
        0%{
            opacity: 0;
        }
        100%{
            opacity:1;
        }
    `;
    //escribir la constante simpre con upercamelcase
    const EstilosH3=styled.h3`
        padding: 2rem;
        text-align: center;
        background-color: ${MainColor};
        /* transition: background-color 2s; podemos hacerlo asi o conuna funcion por ej
        y al tiempo que tarda se lo pasamos como string*/
        transition:${setTransitionTime('2s')};
        animation: ${fadein} 5s ease-in-out;

        /*a otro h3 le pasamos una propiedad llamada color='#61dafb' y para que funcione 
        ponemos pa propiedad color y dentro de las llaves llamamos a props y le pasamos la 
        propiedad que llamamos colorReacr que fue como la llamamos*/
        color:${props=>props.colorReact};//sin destructuracion

        //con destructuracion    el || significa sino osea sino tiene colorReact pintalo negro
        color:${({colorReact})=>colorReact || '#000'};//como el primer h3 no tiene prop color se aplica el negro


        /* ------------------------------------IMPORTANTE ---------------------------*/
        //aplicamos a otro h3 estilos cuando tenga esta propiedad (isBoton) y como vamos a utilizar
        // varias propiedades css esntonces en el import arriba llammamos ademas de styled-component
        // a css para agregar template string dentro de los template string porque estos estilos ya 
        //estan dentro de un template estring
        //&& significa SI osea si hay una propiedad isBoton se aplicaran los estilos
        ${({isBoton})=>isBoton && css`
            margin: auto;
            width: 30%;
            cursor: pointer;
        `}

        /* se refiere a el padre este hover osea al h3 lo especificamos con styled.h3*/
        &:hover{
            background-color: ${MainAlfaColor89};
        }
    `;

    //--------------------------- ThemeProvider-----------------------------
    /*crearemos dos obj con propiedad que contengan un color y un color de fondo(bgColor)
    estos obj se lo pasaremos a las propiedades del div llamado box de esta froma:
        color: ${({theme})=>theme.color};
        background-color: ${({theme})=>theme.bgColor};
    destructuramos theme que se lo pasamos como propiedades a ThemeProvider que es un contenedor
    de de varibales*/ 
    const ligth={
        color:'#222',
        bgColor:'#DDD'
    }
    const dark={
        color:'#DDD',
        bgColor:'#222'
    }
    const Box= styled.div`
        padding: 1rem;
        margin: 1rem;
        color: ${({theme})=>theme.color};
        background-color: ${({theme})=>theme.bgColor};
        
    `
    //aca creamos una variable y le decimos que erede todo del div Box y creara un div con
    // todas sus propiedades mas el border radius pero este border se aplicara a este nuevo
    // componente que creamos llamado BoxRaunded
    const BoxRaunded=styled(Box)`
        border-radius: 30px;
    `
    //---------------------------Termina estilos con ThemeProvider-----------------------------

    //-----------------------------createGlobalStyle-------------------------------
    const GlobalStyle= createGlobalStyle`
        /* resetear estilos se aplican a etiquetas no a componentes */
        h2{
            color: white;
            background-color: red;
            text-transform: uppercase;
        }
    `
    return(
        <>
            <GlobalStyle/>
            <h2>Styled - Component</h2> 
            {/*ponemos entre etiquetas la variable que tiene los estilos y ya sabe que es un H3
            por que se lo decimos en: styled.h3*/}
            <EstilosH3>hola soy h3 con componentes estilizados</EstilosH3>
            <EstilosH3 colorReact='#61dafb90'>hola soy h3 con componentes estilizados con propiedades</EstilosH3>
            
            {/*cuando tenga la propiedad isBoton le palicara estilos a este solo h3*/}
            <EstilosH3 isBoton>Soy un h3 estilizado como boton</EstilosH3>

            {/* el ThemeProvider es un contenedor de variables nada mas y dentro pondremos
            el div creado llamado Box*/}
            <ThemeProvider theme={ligth}>
                <Box>soy una caja o div con tema ligth</Box>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>soy una caja o div con tema dark</Box>
                <BoxRaunded>soy una caja que hereda de la de arriba de dark o ligth</BoxRaunded>
            </ThemeProvider>
        </>
    )
}


