import { useState } from "react";

export const useForm=(initialForm,validateForm)=>{
    const[form,setForm]=useState(initialForm);
    const[error,setError]=useState({});
    const[loading,setLoading]=useState(false);
    const[response,setResponse]=useState(null);

    const handleChange=(e)=>{
        const {name,value}=e.target
        setForm({
            ...form,
            [name]:value
        })
    }
    const handleSubmit=(e)=>{
       e.preventDefault();
       handleChange(e)//actualiza el formulario cuando se envia
       setError(validateForm(form))
       if(!error){
           
           //funcion para enviar la informacion a algun lado si no hay error
       }
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