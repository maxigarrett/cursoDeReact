import React,{useState,useEffect} from 'react';

const Reloj=({hora})=>{
    return(<h3>{hora}</h3>)
}
const RelojHooks =()=>{

    const [hora,setHora]=useState(new Date().toLocaleTimeString());
    const [visible,setVisible]=useState(false);

    // UNA FORMA DE INICIAR EL RELOJ
    // const tikTok=()=>{
    //     let time=setInterval(()=>{
    //          setHora(new Date().toLocaleTimeString())   
    //          setVisible(true)
    //     },1000)
    // }

    useEffect(()=>{
        console.log('actualizacion Reloj')
        let time=0;
        if(visible===true){
            time= setInterval(()=>{
                 setHora(new Date().toLocaleTimeString())   
            },1000)
        }else{
            console.log('desmontaje Reloj')
            clearInterval(time)
            return()=>{
                clearInterval(time)
            }
        }
    },[visible])

    return(
        <>
            <h2>Reloj - Hooks</h2>
            <button onClick={()=>setVisible(true)}>iniciar</button>
            <button onClick={()=>setVisible(false)}>detener</button>
            {visible?<Reloj hora={hora}></Reloj>:null}
        </>

    )
}
export default RelojHooks