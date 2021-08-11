import React,{useState,useEffect} from 'react';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import { HelpHttp } from '../helper/HelpHttp';
import { Error404 } from '../pages/Error404';
import { Loader } from './Loader';
import { SongTable } from './SongTable';
import { SounDetail } from './SoundDetails';
import { SoundForm } from './SoundForm';
import { SoundOneArtist } from '../pages/SoundOneArtis';
//API de canciones: https://www.theaudiodb.com/api_guide.php
//usamos esta ppara la letra de cancion
//https://api.vagalume.com.br/search.php?art={artista}&mus={nombreCancion}&apikey={key}

//si no exsite nada en localstorage entonces crea un array vacio
let initialSongs=JSON.parse(localStorage.getItem('mySongs')) || [];
export const SoundSearch=()=>{
    const [search,setSearch]=useState(null);//busqueda
    const [lyric,setLyric]=useState(null)//cancion
    const [biography,setBiography]=useState(null);//biografia
    const [loading,setLoading]=useState(false);
    const [mySongs,setMySongs]=useState(initialSongs);//gurdaremos nuestras canciones favoritas
    let {get}=HelpHttp();

    //viene la informacion del formulario
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

        //cremos localstorage cuando trae info de la api de la cancion que buscamos del formulario
       localStorage.setItem('mySongs',JSON.stringify(mySongs))
    },[search,mySongs])

    const handleSaveSongs=()=>{
        alert('salvando cancion en localstorage')
        let songsCurrenci={
            search,
            lyric,
            biography
        }
        setMySongs((mySongs)=>[...mySongs,songsCurrenci])

    }
    const handleDeleteSong=(id)=>{
        let isDelete= window.confirm(`desea eliminar la cancion ${id}`)
        if(isDelete){
            let song=mySongs.filter((_,index)=>index!==id)//traemos todos menos el q coincida
            setMySongs(song)
            localStorage.setItem('mySongs',JSON.stringify(song))
        }
    }
    return(
        <>
            <HashRouter basename='canciones'>
                <header>
                    <h1>sound search</h1>
                
                <nav>
                    <NavLink exact to='/'>Home</NavLink>
                </nav>
                </header>
                <Switch>
                    <Route exact path='/'>
                        <main>
                            <SoundForm handlesearch={handlesearch} handleSaveSongs={handleSaveSongs}/> 
                            <SongTable handleDeleteSong={handleDeleteSong} mySongs={mySongs}/> 
                            {loading && <Loader/>}
                        
                            {search && !loading && <SounDetail search={search} lyric={lyric} biography={biography}/>}   
                        </main>
                    </Route>
                    <Route exact path='/canciones/:id' children={<SoundOneArtist mySongs={mySongs}/>}>
                    </Route>
                    <Route path='*' children={<Error404/>}/>
                </Switch>
            </HashRouter>
            {/* {loading && <Loader/>} */}

        </>
    )
}