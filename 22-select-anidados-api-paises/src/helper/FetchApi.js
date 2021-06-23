import React, { useEffect, useState } from "react";

export const FetchApi=(url)=>{

    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);

    
    
    useEffect(()=>{
        const controller= new AbortController();
        const signal=controller.signal;
        const fetchData= async()=>{
            setLoading(true);
            try{
                
                const res=await fetch(url);
                if(!res.ok){
                    let error=new  Error('error en la peticion fetch');
                    error.status=res.status || '00';
                    error.statusText=res.statusText || 'Ocurrio un error';
                }
                const data=await res.json();

                if(!signal.aborted){
                    setData(data)
                    setError(null)
                }
                else{
                    setData(null)
                }
                
            }catch(err){
                //el abort se ejecuta si la api no responde pero puede responder con un error 404 por
                //algun error en la los END POINT entonces el signal.aborted no dara error
                if(!signal.aborted){
                    setData(null);
                    setError(err)
                }
            }finally{
                if(!signal.aborted){
                    setLoading(false);
                    setData(null);
                    setError(null)
                }
            }
        }
        return()=> controller.abort();

        fetchData()
    },[url])

    return({
        data,
        error,
        loading
    })
}