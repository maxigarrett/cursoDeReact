import React from 'react';

export const Message=({MesaggeError,BgColor})=>{
    let styles={
        padding:'1rem',
        marginBottom:'1rem',
        textAlign:'center',
        color:'#ffff',
        backgroundColor:BgColor
    }
    return(
        <div style={styles}>
            <span>{MesaggeError}</span>
        </div>
    )
}