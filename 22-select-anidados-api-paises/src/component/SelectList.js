import React from 'react';
import { FetchApi } from '../helper/FetchApi';
import {Message} from './Message';

export const SelectList= ({title,url,handleChange})=>{
    const {data,error,loading}= FetchApi(url);
    if(!data){
        return null
    } 
    if(error){
        return <Message MesaggeError={`Error ${error.satusText}:${error.status}`} BgColor='#dc3545'/>
    }

    
    
    let id=`select-${title}`
    let options=data.response[title];
    console.log(data,error,loading)
    console.log(options)
    return(
        <>
            <h2>Select List</h2>
            <select name={id} onChange={handleChange}>
                <option value=''>-- elige {title} --</option>
                {data && options.map((el)=><option key={el} value={el}>{el}</option>)}
            </select>
        </>

    )
}
