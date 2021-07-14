import { useState } from "react";
import { HelpHttp } from "../helper/HelpHttp";
// API PARA MANDAR FORMULARIO A UN DESTINATARIO
    // https://formsubmit.co/
export const useForm=(initialForm,validateForm)=>{
    const[form,setForm]=useState(initialForm);
    const[error,setError]=useState({});
    const[loading,setLoading]=useState(false);
    const[response,setResponse]=useState(null);

    const {post}=HelpHttp();
    const handleChange=(e)=>{
        const {name,value}=e.target
        setForm({
            ...form,
            [name]:value
        })
    }
    const handleSubmit=async (e)=>{
       e.preventDefault();
       handleChange(e)//actualiza el formulario cuando se envia
       setError(validateForm(form))
       if(Object.keys(error).length===0){
           alert('enviando formulario')
           setLoading(true)
           const url=`https://formsubmit.co/ajax/flecha.moll.22@gmail.com`
           const options={
               body:form,
               headers:{
                   'content-type':'application/json',
                   Accept:'application/json'
                }
           }
          post(url,options)
          .then(res =>{
              setLoading(false)//se oculta el loading
              setResponse(true)
              setForm(initialForm)
              setTimeout(()=>setResponse(false),3000)
          })
       }
       else return
    }
    const handleBlur=(e)=>{
        handleChange(e)//actualiza el formulario cuando sale de foco

        //validateForm devulve un objeto con el error si es que contiene y actualiza la variable de error
        setError(validateForm(form))
    }
    
    return{
        form,
        error,
        loading,
        response,
        handleChange,
        handleSubmit,
        handleBlur
    };
}