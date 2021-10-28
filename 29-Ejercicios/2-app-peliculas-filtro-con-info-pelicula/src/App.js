import { BrowserRouter as Router,Switch ,Route,Link} from "react-router-dom";
import styles from './components/MovieContainer.module.css';
import { MovieContainer } from "./components/MovieContainer";
import { MovieDescription } from "./pages/MovieDescription";

/**
 * 
 * La solución es simple, solo agregue otra capa de <React.Fragment>después <Switch>. Espero eso ayude.
 */
function App() {
  return (
    <div>
      <Router>

          <header className={styles.header}>
            <Link className={styles.movieList} to='/'>Movies</Link>
          </header>
        <Switch>
        {/*tira un warning que con este fragment se soluciona*/}
          <>
            <main className={`${styles.main}`}>
              <Route exact path='/'>
                <MovieContainer/>
              </Route>

              <Route exact path='/info/:idMovie'>
                <MovieDescription/>
              </Route>
            </main>
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
