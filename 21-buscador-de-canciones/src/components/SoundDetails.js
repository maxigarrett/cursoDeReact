import React from 'react';
import { SoundArtist } from './SoundArtist';
import { SoundLyric } from './SoundLiryc';
import {Message} from './Message';
export const SounDetail=({search,lyric,biography})=>{
    //para evitar renderisados inecesarios si todavia no hay nada
    if(!lyric || !biography){
        return(
            <h2>{null}</h2>//retornamos algo para que no se caiga la app ya q si uno es null no entrara en el return de abajo
        ) 
    }
    return(
        <>
            {/* IMPORTANTE la peticion donde almacenamos lyric si no enceuntra la cancion manda un obj con la 
            propiedad error, y nuestro helphttp creamos un error llamado err si la peticion va mal,
            tambien el abortController en caso de error mandara una prop name con la palabra aborterror 
             el fetchpor*/}
            {lyric.lyrics?
                <SoundLyric/>
                :
                <Message MesaggeError={`Error no existe la cancion ${search.song}`} BgColor='#dc3545'/>
            }
            {biography.artists?<SoundArtist/>:
            <Message MesaggeError={`Error El artista ${search.song}`} BgColor='#dc3545'/>
            }    
        </>
    )
}