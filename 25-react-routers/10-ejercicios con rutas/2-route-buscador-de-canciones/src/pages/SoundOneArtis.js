import { useParams } from "react-router-dom"
import { SounDetail } from "../component/SoundDetails"

export const SoundOneArtist=({mySongs})=>{
    let {id}=useParams()//obtenemos el id del parametro id de la url caundo apretemos el boton ver
   
    // mysong es una arreglo y le pasamos la posicion que obtenemos al apretar el boton ver que redigira
    // a la ruta de cancione/id el id se lo pasamos por SongTable.js a SontTableRow.js
    let{biography,search,lyric}=mySongs[id]
    // console.log(biography,search,lyric)
    return <SounDetail search={search} lyric={lyric} biography={biography}/>
}