/*Para las peticiones a apis o bases de datos es mejor crear una carpeta de hooks para trabajr
con los hooks personalizados para las peticiones y llamar el archivo donde lo necesitemos
Para que React sepa que es un Hook personalizado el Hook tiene que empezar con la palabra USE
pero en minuscula se suigue con el patron lowecase por ejemplo useFetch*/
import {useEffect,useState} from 'react';

//esto no sera un componente sino una funcion por lo que el return tenemos que devolver el 
//objeto,variable ,array,etc que estemos trabajando
export const useFetch =(url)=>{

    const [data,setData]=useState(null)
    //variable que esta pendiende de la peticion si se resuelve bien quedara en false
    const [isPending,setisPending]=useState(true)
    const [error,setError]=useState(null)//almacenara el error
    
    const getData=async (url)=>{
        //controlamos el error
        try{
            const res= await fetch(url)
            if(!res.ok){
                //throw es el return de los errores asique creamos un objeto para manipular ese error
                //si algo salio mal entrara a este objeto y se lo pasara al catch por parametro gracias
                // a que pusimos la palabra reservada throw
                throw{
                    err:true,
                    status:res.status,
                    statusText:`ocusrrio un error ${res.statusText}`
                }
            }
            const data=await res.json();
            
            //si va todo bien entonces actualizo las variables
            setisPending(false)
            setData(data)
            setError({err:false})
        }catch(err){
            setisPending(true)
            setError(err)
        }
    }

    //el useEffect se ejecutara cuando cambie la url osea si la llamamos en diferentes archivos 
    //para que se ejecute con diferentes peticiones. para eso ponemos como segundo parametro[url]
    useEffect(()=>{
        getData(url)
    },[url])
    return{data,isPending,error}
}

