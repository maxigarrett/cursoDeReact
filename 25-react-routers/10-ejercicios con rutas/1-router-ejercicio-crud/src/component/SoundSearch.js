import React,{useState,useEffect} from 'react';
import { HelpHttp } from '../helper/HelpHttp';
import { Loader } from './Loader';
import { SounDetail } from './SoundDetails';
import { SoundForm } from './SoundForm';
//API de canciones: https://www.theaudiodb.com/api_guide.php
//usamos esta ppara la letra de cancion
//https://api.vagalume.com.br/search.php?art={artista}&mus={nombreCancion}&apikey={key}
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
        if(search===null)return null
        const fetchData=async()=>{
            let{artist,song}=search;
            let artistUrl=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
           let songUrl=`https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art=${artist}&mus=${song}`
            setLoading(true);
            const [artistRes,songRes]= await Promise.all([get(artistUrl),get(songUrl)])

            console.log(artistRes,songRes)
            setLoading(false)
           
            setBiography(artistRes);
            setLyric(songRes);
           
        }
        fetchData();
    },[search])

    return(
        <>
            <header>
                <h1>sound search</h1>
            </header>
            <main>
                {loading && <Loader/>}
                <SoundForm handlesearch={handlesearch} />
                {search && !loading && <SounDetail search={search} lyric={lyric} biography={biography}/>}   
            </main>
        </>
    )
}