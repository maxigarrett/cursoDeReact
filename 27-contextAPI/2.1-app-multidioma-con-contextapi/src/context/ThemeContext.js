import { React,createContext } from "react";
import { useState } from "react";

export const ThemeContext=createContext()
let initilTheme='light';


export const ThemeProvaider=({children})=> {
    const[theme,setTheme]=useState(initilTheme);
    
    //input radio
    const handelTheme=(e)=>{
        const {value}= e.target
        console.log(value)
        value === 'light'? setTheme(value) : setTheme(value)
    }

    

    let data={theme,handelTheme}
    return(
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}

