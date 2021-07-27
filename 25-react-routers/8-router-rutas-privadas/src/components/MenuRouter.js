import {React} from "react";
import {NavLink} from "react-router-dom";
export const MenuRouter=()=>{
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <span>Rutas Privadas</span>
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}