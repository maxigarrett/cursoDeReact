import { SongTableRow } from "./SongTableRow"

export const SongTable=({mySongs,handleDeleteSong})=>{
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th colSpan='2'>Artista</th>
                        <th>cancion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>  
                <tbody>
                    {mySongs.length > 0 ?
                        mySongs.map((el,index)=>
                            //el index que generamos con el bucle se lo pasamos como id creacion de un registro
                            //osea si creamos dos registros el primero tendra el id 0 y el segundo id 1
                            <SongTableRow key={index} song={el} id={index} handleDeleteSong={handleDeleteSong} /> 
                        )
                        :
                        <tr>
                            <td colSpan='4'>No hay canciones favoritas</td>
                        </tr>
                    }   
                </tbody>  
            </table>  
        </>
    )
}