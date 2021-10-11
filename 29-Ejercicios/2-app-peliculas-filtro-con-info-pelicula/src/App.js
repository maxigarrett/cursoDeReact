import { BrowserRouter as Router,Switch ,Route,Link} from "react-router-dom";
import styles from './components/MovieContainer.module.css';
import { FormMovieSearch } from "./components/FormMovieSearch";
import { MovieContainer } from "./components/MovieContainer";
import { MovieDescription } from "./pages/MovieDescription";


function App() {
  return (
    <div>
      <Router>
        <header className={styles.header}>
          <Link className={styles.movieList} to='/'>Movies</Link>
            <FormMovieSearch/>
        </header>

        <Switch>
          <main>
            <Route exact path='/'>
              <MovieContainer/>
            </Route>

            <Route exact path='/info/:idMovie'>
              <MovieDescription/>
            </Route>
          </main>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
