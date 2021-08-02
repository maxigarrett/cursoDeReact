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
        <article>
            {lyric.mus?
                <SoundLyric title={search.song} lyric={lyric.mus[0]}/>
                :
                <Message MesaggeError={`Error no existe la cancion ${search.song}`} BgColor='#dc3545'/>
            }

            {/*BIOGRAFIA DEL ARTISTA*/}
            {biography.artists?<SoundArtist artist={biography.artists[0]}/>:
            <Message MesaggeError={`Error El artista '${search.artist}' no se encontro`} BgColor='#dc3545'/>
            }    
        </article>
    )
}