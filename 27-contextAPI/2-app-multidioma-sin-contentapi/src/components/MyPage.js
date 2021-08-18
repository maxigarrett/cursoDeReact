import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { useState } from "react";
let initilTheme='light';
let initialLenguaje='es';

//esto en realidad tendria que venir de un JSON desde el back para usar. aca lo estamos simulando
//todos los idiomas tienen que tener la misma propiedad para que si cambiamos solo cambi el contenido
//y no cambiar cada propiedad eso seria imposible 
const traslation={
  es:{
    headerTitle:'Mi aplicacion sin ContextApi',
    headerSubTitle:'Mi cabecera',
    headerLight:'Claro',
    headerDark:'Oscuro',
    headerButtonLogin:'Iniciar Sesion',
    headerButtonLogout:'Cerrar Sesion',
    mainWelcome:'Bienvenid@ invitado',
    mainHello:'Hola Usuari@',
    mainContent:'Mi contenido principal',
    footerTitle:'Mi pie de pagina',
  },
  en:{
    headerTitle:'My application without ContextApi',
    headerSubTitle:'My header',
    headerLight:'Light',
    headerDark:'Dark',
    headerButtonLogin:'Login',
    headerButtonLogout:'Logout',
    mainWelcome:'Welcome',
    mainHello:'Hello User',
    mainContent:'My main content',
    footerTitle:'My footer',
  }
}

export const MyPage=()=>{
  const[theme,setTheme]=useState(initilTheme)
  const[lenguaje,setLenguaje]=useState(initialLenguaje)//controla el idioma
  //almacenamos el idioma espaniol el obj tiene como propiedad indexada es y en podemos acceder
  //como traslation.es o trslation[lenguaje]
  const[texts,setTexts]=useState(traslation[lenguaje])
  
  // console.log(traslation[lenguaje])
  const handelTheme=(e)=>{
    const {value}= e.target
    value === 'light'? setTheme(value) : setTheme(value)
  }

  //funcion que captura el valor del option para cambiar el lenguaje de los textos
  const handelLenguaje=(e)=>{
    let{value}=e.target
    if(value==='es'){
      setLenguaje(value)
      setTexts(traslation[value])
    }else{
      setLenguaje(value)
      setTexts(traslation[value])
    }
  }
  return (
    <div className='App'>
      <Header
        texts={texts} 
        theme={theme} 
        handelTheme={handelTheme} 
        handelLenguaje={handelLenguaje}
      />
      <Main texts={texts} theme={theme}/>
      <Footer texts={texts} theme={theme}/>
    </div>
  );
}