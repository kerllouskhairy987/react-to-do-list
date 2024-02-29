import { useRef, useState } from "react";
import './App.css';
import { Container } from "react-bootstrap";


function App() {

  const [task, setTask] = useState([]);

  const inputRef = useRef();

  const add = () => {
    const valueInput = inputRef.current.value;
    const newData = { completed: false, valueInput };
    setTask([...task, newData]);
    inputRef.current.value = "";
  }

  const itemDone = (index) => {
    const newTask = [...task];
    task[index].completed = !task[index].completed;
    setTask(newTask);
  }

  const toDelete = (index) => {
    const newTask = [...task];
    newTask.splice(index , 1)
    setTask(newTask)
  }

  return (
    <div className="container-fluid bg-dark text-light pt-5">
      <div className="App container-app text-center">
        <h2> To Do List </h2>
        {<p className="number-tasks my-5"> {task.length}  <span> tasks </span> </p>}

        <div className="input-part p-3 gap-3">
          <input ref={inputRef} type="text" placeholder="Enter Your Task ..." />
          <button onClick={add}> ADD </button>
        </div>

        <ul className="m-0 ps-3">
          {
            task.map(({ valueInput, completed }, index) => {
              return (
                <div className="item-task p-3">
                  <li className={completed ? "diffstyle" : ""} onClick={() => itemDone(index)}> {valueInput} </li>
                  <span onClick={() => toDelete(index)}>X</span>
                </div>)
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
