import React, { useState } from 'react';
import { SelectList } from './SelectList';
// Api ciudades mrxicanads: https://api-sepomex.hckdrk.me/
export const SelectAnidados=()=>{
    const [state,setState]=useState(null)
    const [municipios,setMunicipios]=useState('')
    const [colonias,setColonias]=useState('')
    return(
        <>
            <h2>Select Anidados</h2>
            <SelectList title='estados' url={``} handleChange={(e)=>setState(e.target.value)}/>
            
            {state && <SelectList title='municipios' url={``} handleChange={(e)=>setMunicipios(e.target.value)}/> }
	        
            {municipios && <SelectList title='colonias' url={``} handleChange={(e)=>setColonias(e.target.value)}/>}
	        
            <p>{state,municipios,colonias}</p>
            
        </>
    )
}