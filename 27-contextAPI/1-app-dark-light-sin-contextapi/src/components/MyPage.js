import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { useState } from "react";
let initilTheme='light';

//sin contextAPI para poner un tema ocuro le tendraimos que pasar la misma variable a todos los componentes
//y si cada componente tuviera mas hijos componentes tambien le tendriamos que pasar la varible theme
export const MyPage=()=>{
  const[theme,setTheme]=useState(initilTheme)

  //input radio
  const handelTheme=(e)=>{
    const {value}= e.target
    value === 'light'? setTheme(value) : setTheme(value)
  }
  return (
    <div className='App'>
      <Header theme={theme} handelTheme={handelTheme}/>
      <Main theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );
}