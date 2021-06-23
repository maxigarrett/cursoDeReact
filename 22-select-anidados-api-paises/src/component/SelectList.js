import React from 'react';
// import { FetchApi } from '../helper/FetchApi';


export const SelectList=({title,url,handleChange})=>{
    // const {data,error,loading}= FetchApi(url);

    // let id=`select-${title}`
    // let options=data.response;
    return(
        <>
            <h2>Select List</h2>
            <select name={''} onChange={handleChange}>
                <option value=''>-- elige {title} --</option>
            </select>
        </>

    )
}