import {React} from "react";
import { Link, NavLink } from "react-router-dom";
export const MenuRouter=()=>{
    return(
        <>
        <header>
            <nav>
                <ul>
                    {/*recarga todo el documento cada ves que acemos click en un enlace*/}
                    <li>
                        <span>Menu con enlaces html (no recomendado)</span> 
                        <a href='/'>Home</a>
                        <a href='/acerca'>Acerca</a>
                        <a href='/contacto'>Contacto</a>
                    </li>

                    {/*para evitar ese renderizado de todo el dom React-Router-Dom nos ofrece los componentes
                    <Nav> y <Link> para que funcione tiene que ir este componente dentro de Router que lo
                    tenemos en RouterExplicacion.js dentro de Roter pero fuera de Switch
                    el atributo to es como si fuera el href de la etiqueta </a>*/}
                    <li>
                        <span>Componente Links</span>
                        <Link to='/'>Home</Link>
                        <Link to='/acerca'>Acerca</Link>
                        <Link to='/contacto'>Contacto</Link>
                        <Link to='/noexiste'>no existe</Link>
                    </li>

                    {/*funciona exactamente igual que Link pero tiene un atributo llamado activeClassName
                    que permite poner una clase y desde un archivo css le daremos estilos se lo daremos
                    desde index.css*/}
                    <li>
                        <span>Componente NavLink</span>
                        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                        <NavLink exact to='/acerca' activeClassName='active'>Acerca</NavLink>
                        <NavLink exact to='/contacto' activeClassName='active'>Contacto</NavLink>
                    </li>

                </ul>

            </nav>
        </header>
        </>
    )
}