import {React} from "react";
import {NavLink } from "react-router-dom";
export const MenuRouter=()=>{
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <span>Componente NavLink</span>
                        <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                        <NavLink exact to='/acerca' activeClassName='active'>Acerca</NavLink>
                        <NavLink exact to='/contacto' activeClassName='active'>Contacto</NavLink>
                    </li>
                    <li>
                        <span>Paso de parametros de consulta useParam</span>
                        <NavLink to='/usuario/maxi/29'>maxi</NavLink>
                    </li>
                    <li>
                        <span>Paso de parametros de consulta useLocation</span>
                        <NavLink to='/productos'>Producto</NavLink>
                    </li>
                    <li>
                        {/*Redireccionara a la pagina de acerca y contaco */}
                        <span>Redirecciones</span>
                        <NavLink to='/about'>Abaut</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>

                </ul>
            </nav>
        </header>
        </>
    )
}