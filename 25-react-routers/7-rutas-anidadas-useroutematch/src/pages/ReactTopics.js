import {React} from 'react';
import { NavLink, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
const Topic=()=>{
    let {topic}=useParams();
    //mostrara la el valor del parametro topic del component Route y ese valor se lo pasa el component
    // NavLink
    console.log(topic)
    return(
        <>
        {/* para mostrar diferente contenido validamos si en topic no hay nada no hara nda pero si trae
        algo mostrara el contenido*/}
            {!topic ||
                <>
                        <h4>{topic}</h4>
                        <p>contenido {topic}
                        </p>
                </>
            }       
        </>
    )
}
export const ReactTopics=()=>{
    /*useRouteMatch() deculve un objeto {path: "/react", url: "/react", isExact: true, params: {…}}
    -path: sirve para construir rutas relativas <Route path='/algo'> osea que en el path del Route lo que tiene detras
    lo toma del dominio donde se encuentre en este caso sera localhost pero cuando se lleve a produccion
    tomara la ruta raiz del nombre del dominio al que subamos la pagina por eso es relativa
    -url: sirve para construir enlaces relativos <Link> o <NavLink>
    es decir que el path es para lo Route y el url sirve para los link y navlink*/
    let match=useRouteMatch()
    console.log(match)
    const{path,url}=match
    return(
        <>
            <h2>Temas de React</h2>
            <ul>
                <li>
                    <NavLink to={`${url}/jsx`} activeClassName='active'>JSX</NavLink >
                </li>
                <li>
                    <NavLink to={`${url}/props`} activeClassName='active'>Props</NavLink >
                </li>
                <li>
                    <NavLink to={`${url}/state`} activeClassName='active'>State</NavLink >
                </li>
                <li>
                    <NavLink to={`${url}/components`} activeClassName='active'>Components</NavLink>
                </li>
            </ul>
            {/*no hace falta englovarlo en un <Router> porque donde importamos este archivo ya tiene
            englobado el router entonces miestras importemos simpre dentro del archivo RouterExplicacion.js
            podremos hacer tantos shitch como querramos*/}
            <Switch>
                    <Route exact path={`${path}`}>
                        <h4>Elije un tema</h4>
                        <p>balbaslbalbalblablalbalblablablalbalblablalbalbblalablabab
                            albalblablalbalblablalblablablalbalblalbalblabla
                            balblablablalalblbalbalblablablablablablablaablalb
                        </p>
                    </Route>
                    {/*en el archivo principal RouterExplicacion.js a la Route que tiene el 
                    path='react' hay que sacarle el exact.
                    
                    el valor :topic lo toma de el <NavLink> osea toma el path que es /react pero
                    el navlink tine /react/nombreDeSubRuta entonces toma ese valor y lo agrega a topic*/}
                    <Route exact path={`${path}/:topic`} component={Topic}/>
            </Switch>
        </>
    )
}