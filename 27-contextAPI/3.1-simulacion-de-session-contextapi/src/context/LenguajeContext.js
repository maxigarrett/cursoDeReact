import { React,createContext } from "react";
import { useState } from "react";

export const LenguajeContext=createContext()
let initialLenguaje='es';

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

export const LenguajeProvaider=({children})=> {
    //lenguaje
    const[lenguaje,setLenguaje]=useState(initialLenguaje);//controla el idioma 
    const[texts,setTexts]=useState(traslation[lenguaje]);
    
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

    

    let data={texts,handelLenguaje}
    return(
        <LenguajeContext.Provider value={data}>{children}</LenguajeContext.Provider>
    )
}