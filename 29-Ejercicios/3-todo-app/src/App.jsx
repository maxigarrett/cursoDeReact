import { useState } from "react";
import data from "./data.json";
import "./App.css";
import { CrudToDoList } from "./components/CrudToDoList";
import { CrudFormToDo } from "./components/CrudFormToDo";

function App() {
  const taskData = data.task;
  const [todo, setTodo] = useState(taskData);

  const createTask = (data) => {
    const newItem = {
      id: Number(new Date()),
      task: data.task,
      completed: false,
    };
    // console.log(newItem)
    setTodo([...todo, newItem]);
  };
  const handelChecked = (id) => {
    console.log(id);
    const result = todo.map((el) =>
      el.id === Number(id) ? { ...el, completed: !el.completed } : el
    );
    setTodo(result);
  };
  const deleteData = (id) => {
    console.log(id);
    //traera toda la lista mintras no coincida el id. Si concide lo ignora
    let resultFilter = todo.filter((el) => el.id !== id);
    setTodo(resultFilter);
  };
  // console.log(todo)
  return (
    <div className="container">
      <CrudFormToDo createTask={createTask} />
      <CrudToDoList
        data={todo}
        handelChecked={handelChecked}
        deleteData={deleteData}
      />
    </div>
  );
}

export default App;
