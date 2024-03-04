import React, { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskValue = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  };

  const deleteTask = (taskName) => {
    setTodoList(todoList.filter((task) => task !== taskName));
  };

  return (
    <div>
      <div className="addTask">
        <input onChange={handleTaskValue} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="lsit">
        {todoList.map((task) => (
          <div>
            <h1>{task}</h1>
            <button onClick={() => deleteTask(task)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
