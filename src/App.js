import "./styles.css";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const setCurrentInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const addTasks = () => {
    setTask([...task, inputValue]);
    setInputValue("");
  };

  const deleteTask = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };
  /*Using an underscore (_) in place of a variable name when you don't intend to use that variable is a common practice in JavaScript, and it helps to avoid naming conflicts in your code. In your specific case, you're using it in the .filter method to iterate over the items in the task array, but you don't need the item itself to perform the delete operation, so you can replace it with _.
   */

  const [completedTasks, setCompletedTask] = useState([]);
  const completeTask = (index) => {
    setCompletedTask([...completedTasks, task[index]]);
    setTask(task.filter((_, i) => i !== index));
  };

  const deleteCompletedTask = (index) => {
    setCompletedTask(completedTasks.filter((_, j) => j !== index));
  };

  return (
    <div className="App">
      <h1>To Do</h1>
      <input onChange={setCurrentInputValue} value={inputValue} />
      <button onClick={addTasks}>add task</button>
      <div className="task-lists">
        <div className="todo-list">
          Here are the todo tasks
          {task.map((task, i) => {
            return (
              <ul key={i}>
                <li>
                  {task}
                  <button onClick={() => deleteTask(i)}>×</button>
                  <button onClick={() => completeTask(i)}>✓</button>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="completed-list">
          Here are the Completed tasks
          {completedTasks.map((completedTask, j) => {
            return (
              <ul key={j}>
                <li>
                  {completedTask}{" "}
                  <button onClick={() => deleteCompletedTask(j)}>×</button>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
