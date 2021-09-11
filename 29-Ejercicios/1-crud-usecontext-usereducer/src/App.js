import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { TaskForm } from './components/TaskForm';
import {TaskHeader} from './components/TaskHeader';
import { TaskList } from './components/TaskList';
import { TaskProvaider } from "./contexts/TaskContext";
function App() {
  return (
    <div>
      <div className='h-screen text-white text-center p-10'>
        <div className='container mx-auto h-full'>
          <Router>
            <TaskProvaider>
              <TaskHeader/>
              <Switch>
                <Route exact path='/' component={TaskList}/>
                <Route exact path='/add' component={TaskForm}/>
                <Route exact path='/edit/:id' component={TaskForm}/>
              </Switch>
            </TaskProvaider>
        </Router>
        </div>
      </div>
    </div>
  );
}

export default App;


<TaskList/>