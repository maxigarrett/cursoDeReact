import { useHistory } from "react-router-dom"

export const SongTableRow=({song,id,handleDeleteSong})=>{
    let history=useHistory();
    if(!song) return null
    console.log(song)
    let{biography,search}=song;
    let avatar=biography.artists[0].strArtistThumb;
   
    const handelSeeSong=()=>{
        history.push(`/canciones/${id}`)//a la ur le pasamos el id que espera en la ruta
    }
    return(
            <tr>
                <td><img className='avatar' src={avatar} alt='avatar'/></td>
                <td>{search.artist}</td>
                <td>{search.song}</td>
                <td>
                    <button onClick={handelSeeSong}>Ver</button>
                    <button onClick={()=>handleDeleteSong(id)}>Eliminar</button>
                </td>
            </tr>  
    )
}