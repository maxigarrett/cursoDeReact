/*las Referencias proporcionan una forma de acceder a los nodos del DOMo a elementos React creado
en el metodo de renderizado.
En un flujo normal en datos React, las propiedades son la unica forma en la que los componentes padres
pueden interactuar con sus hijos.Para modificar un hijo, vuelves a renderizarlo con propiedades 
nuevas.sin embargo, hay casos que necesitaremos modificar imperativamente un hijo fuera del flujo
de datos tipicos.El hijo a ser modificado puede ser una instancia de un componente React, o un 
elemento de DOM. Para ambos casos Reacr proporciona una solucion.(REFERENCIAS)

Cuandso usar Referencias
Existen unos cuantos buenos casos de uso para referencias:
    1-Controlar enfoques,seleccion de textos,o reproduccion de medios(videos,musica,etc)
    2-activar animaciones imperativas(a traves del control de JS).
    3-integracion con bibliotecas DOM de terceros.

NO ABUSAR DE REFERENCIAS
    

es decir que las referencias pueden controla elementos que ya se cargaron al DOM.*/
import React,{createRef,useRef} from 'react';

//---------------------------------------IMPORTANTE---------------------------------------
//para ocultar un menu de navegacion es ridiculo usar una variable por ej que diga true o false
//y mediante eso ocultamos el menu porque estarioamos crando y eliminando un elemento.y estamos
//haciendo trabajr mas al navegador de gusto pudiendo usar solo CSS mediante referencias.
//para manipular el DOM tenemos referencias asique no usaremos getElementById ni querySelector
export const ReferenciasNav=()=>{

    let refMenuBtn=useRef();//se crea la referencia(como si fuera un selector pero en React)
    let refNavMenu=useRef();
    console.log(refMenuBtn,refNavMenu)
    const handleToggleMenu=(e)=>{
        //--------------------RESULETO SIN REFERENCIAS----------------------
        // const navMenu=document.getElementById('menu')
        // console.log(e.target.textContent)

        // if(e.target.textContent==='Mostrar'){
        //     e.target.textContent='Cerrar'
        //     navMenu.style.display='block'
        // }else{
        //     e.target.textContent='Mostrar'
        //     navMenu.style.display='none'
        // }

        //------------------RESUELTO CON REFERENCIAS---------------------------
        //en ves de utilizar e.target para obtener el boton utilizamos la referencia que esta
        //en el boton pero si mostramos por consola el boton esta dentro de un obj llamado current
        //y para acceder a sus atributos tenemos que llamarolo
        if(refMenuBtn.current.textContent==='Mostrar'){
            refMenuBtn.current.textContent='Cerrar';
            refNavMenu.current.style.display='block';
        }else{
            refMenuBtn.current.textContent='Mostrar';
            refNavMenu.current.style.display='none';
        }
    }
    return(
        <>
            <h1>Hooks - Referencias</h1>
            {/*los id soo son para hacerlo de la manera que no se hace eso seria para vanilla js
            en react suplantamos los id por referencias*/}
            <button 
                ref={refMenuBtn} 
                onClick={(e)=>handleToggleMenu(e)}>
                Mostrar
            </button>
            <nav 
                ref={refNavMenu} 
                id='menu' 
                style={{display:'none',width:'300px'}}>
                <ul>
                    <li><a href='#'>item 1</a></li>
                    <li><a href='#'>item 2</a></li>
                    <li><a href='#'>item 3</a></li>
                    <li><a href='#'>item 4</a></li>
                    <li><a href='#'>item 5</a></li>
                </ul>
            </nav>
        </>
    )
}

