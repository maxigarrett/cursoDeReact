import React,{useState,useEffect} from 'react';
import { HelpHttp } from '../helper/HelpHttp';
import { Loader } from './Loader';
import { SounDetail } from './SoundDetails';
import { SoundForm } from './SoundForm';
//API de canciones: https://www.theaudiodb.com/api_guide.php
//https://lyricsovh.docs.apiary.io/#
export const SoundSearch=()=>{
    const [search,setSearch]=useState(null);//busqueda
    const [lyric,setLyric]=useState(null)//cancion
    const [biography,setBiography]=useState(null);//biografia
    const [loading,setLoading]=useState(false);
    let {get}=HelpHttp();

    const handlesearch=(dataForm)=>{
        //console.log(dataForm)
        setSearch(dataForm)
    }

    useEffect(()=>{
        //por si tarda en buscar que salga del efecto y que se ejecute cuando contenga algo search
        if(search===null)return
        const fetchData=async()=>{
            let{artist,song}=search;
            let artistUrl=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;//bio de banda o artista
            let songUrl=`https://api.lyrics.ovh/v1/${artist}/${song}`;//letra de cancion
            // console.log(artistUrl,songUrl)
            setLoading(true);//aparece el loadin mientras espera la carga

            //como son 2 peticioines usaremos promise.all() all recibe como argumento un arreglo con 
            //todas las peticiones fetch que querramos hacer. artistRes,songRes destructuramos y le
            //poenemos el nombre que queremos y donde se almacena la repuesta de la api.
            //el orden de las peticiones se almacenan en orden tambien que ponemos las variables
            //y en all() va la peticion get que tenemos en helpper
            const [artistRes,songRes]= await Promise.all([get(artistUrl),get(songUrl)])

            setLoading(false)
            setBiography(artistRes);
            setLyric(songRes);
            // console.log(biography.artists[0].strLabel)
        }
        fetchData();
    },[search])

    return(
        <>
            <header>
                <h2>sound search</h2>
            </header>
            <main>
                {loading && <Loader/>}
                <SoundForm handlesearch={handlesearch} />
                <SounDetail search={search} lyric={lyric} biography={biography}/>
            </main>
        </>
    )
}