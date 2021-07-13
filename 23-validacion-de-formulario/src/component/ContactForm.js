import React from "react";
import { useForm } from "../helper/useForm";
import './ContactForm.css'
const initialForm={
    name:'',
    email:'',
    subject:'',
    coment:''
}

//recibe el form del hook useForm
const validateForm=(form)=>{
    let errors={}
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexComments = /^.{1,255}$/;


    //VALIDATE NAME
    if(!form.name.trim())errors.name='llene el campo nombre' 
    if(form.name.trim() && !regexName.test(form.name)) errors.name='sin numeros ni caracteres extraños'

    //VALIDATE EMAIL
    if(!form.email.trim()) errors.email='llene el campo email';
    if(form.email.trim() && !regexEmail.test(form.email)) errors.email='ingrese emial valido'
    
    //VALIDATE COMMENTS 
    if(!form.coment.trim()) errors.coment='introduzaca comentario';
    if(form.coment.trim() && !regexComments.test(form.coment)) errors.coment='maximo 255 caracteres'
    
    
    return errors//retorna el obj de error donde llenara la var de estado de error en useForm
}
export const ContactForm=()=>{

   const {
    form,
    error,
    loading,
    response,
    handleChange,   
    handleSubmit,
    handleBlur}=useForm(initialForm,validateForm)

    return(
        <>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='name'
                    placeholder='ingrese su nombre'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    
                />
                {error.name && <p>{error.name}</p>}
                <input 
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='ingrese su contraseña'
                    value={form.email}
                />
                {error.email && <p>{error.email}</p>}
                <input 
                    type='text'
                    name='subject'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='ingrese su contraseña'
                    value={form.subject}
                />
                
                <textarea
                    name='coment'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.coment}
                    cols='10'
                    rows='10'
                />
                {error.coment && <p>{error.coment}</p>}
                <input type='submit' value='ENVIAR'/>
            </form>
        </>
    )
}