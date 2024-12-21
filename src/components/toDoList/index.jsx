import React, { useState } from "react";
import './style.css';

const ToDoList = () => {
  const [tasksList, setTasksList] = useState([]);
  const [typeTask, setTypeTask] = useState("");

  const addButton = () => {
    if (typeTask.trim() !== "") {
      setTasksList([...tasksList, { text: typeTask, completed: false }]);
      setTypeTask("");
    }
  };

  const toggleComplete = (index) => {
    const updateList = tasksList.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasksList(updateList);
  };

  const deleteButton = (index) => {
    const newList = tasksList.filter((_, i) => i !== index);
    setTasksList(newList);
  };

  const editButton = (index) => {
    const newTask = prompt("Update your task:", tasksList[index].text);
    if (newTask !== null && newTask.trim() !== "") {
      const updateList = tasksList.map((task, i) =>
        i === index ? { ...task, text: newTask } : task
      );
      setTasksList(updateList);
    }
  };

  return (
    <div>
      <h1 className="mainTitel">TO DO LIST</h1>
      <div>
        <input
          className="inputText"
          type="text"
          placeholder="Type your task"
          value={typeTask}
          onChange={(e) => setTypeTask(e.target.value)}
        />
        <button onClick={addButton}>ADD</button>
      </div>
      <div className="tasksList">
        <ul>
          {tasksList.map((task, index) => (
            <div key={index} className="task">
              <div className="taskLeft">
                <input
                  className="inputCheckBox"
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(index)}
                />
                <li className={`taskName ${task.completed ? "completed" : ""}`}>
                  {task.text}
                </li>
              </div>
              <div className="tasksListButton">
                <button onClick={() => deleteButton(index)}>Delete</button>
                <button onClick={() => editButton(index)}>Edit</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
