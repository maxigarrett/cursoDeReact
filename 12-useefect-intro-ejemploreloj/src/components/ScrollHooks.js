/*Permite hacer uso del ciclo de vida en un componente funcional.Usar useEffect equivale a la 
combinacion de los metodos:
    1-componentDidMount(montaje)
    2-componentDidUpdate(actualizacion)
    3-componentWillUnmount(desmontaje)
useEffect recibe como parametro una funcion que se ejecuta cada ves que nuestro componente se 
renderiza, ya sea por cambios del estado om las propiedades y un segundo parametro que son las
dependencias que va a leer

cada vez que se renderize este componente ScrollHooks, useEffect() va a ejecutar todo lo que este
dentro de ella

Se puede tener tantos useEffect como se necesite
*/
import React,{useEffect, useState} from 'react';

const ScrollHooks =()=>{

    const [scrollY,setScrollY]=useState(0)

    //-----------------------IMPORTANTE----------------------------------
    // si no espesificamo el segundo parametro de useEffect practicamente lo que aya en este 
    // useEffect se va a estar renderizando cada vez que se vuelva a pintar el componente
    useEffect(()=>{
        // console.log('moviendo el scroll')

        const detectarScroll=()=>{
            setScrollY(window.pageYOffset)
        }
        //para que se ejecute la funcion al la ventana del navegador le ponemos el evento scroll
        //ahora si como segundo parametro le espesificamos lo que tiene que leer en este caso
        //la variable o dependencias scrollY solo se va a renderizar si hay cambios en esa variable 
        // sino no se representan mediante arreglo.
        //  entonces solo se ejecutara el useEffect que este observando esa dependencia
        window.addEventListener('scroll',detectarScroll)

        //le desimos que cuando no exista el scroll desmonteje
        return()=>{
            // console.log('fase de desmontaje')
            window.removeEventListener('scroll',detectarScroll)
        }
    })

    // ----------------------IMPORTANTE: FASE DE actualizacion-----------------------------
    //solo se ejecutara este useEffect si hay cambios en la variable scrollY
    useEffect(()=>{
        // console.log('componentDidUpdate(actualizacion)')
    },[scrollY])

    // ----------------------IMPORTANTE: FASE DE MONTAJE-----------------------------
    //dejar el array vacio especifica a React que va hacer la fase de montaje ya que se ejecutara
    // una sola vez
    //si queremos que se ejecute una sola ves entonces dejamos vacio el array del 2do parametro
    //por consola se ejectura una sola ves.
    useEffect(()=>{
        // console.log('componentDidMount(montaje)')
    },[])

    useEffect(()=>{
        //cuando a un useEffect le agregamos la sintaxis return()=> le indicamos que es la fase
        //de desmontaje. Se untiliza por ejemplo para desuscribirse de servicion, desconectarte de
        // APIs,Limpiar intervalos de tiempo,limpiar manejadores de evento,etc
        return()=>{
            
        }
    })
    return(
        <>
            <h2>Hooks - useEffect</h2>
            <p>{`scrollY del navegador ${scrollY}px`}</p>
        </>
    )
}

export default  ScrollHooks;