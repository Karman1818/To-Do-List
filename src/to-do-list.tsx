import { useState } from "react";

export const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
    const newTaskObject = {
      taskName: newTask,
      taskId: tasks.length + 1,
      isMade: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTaskObject]);
    setNewTask("");
  };

  return (
    <>
      <h1>To-Do-List</h1>
      <h3>things you have to do today:</h3>
      <ul>
        {tasks.map((task) => (
            <li key={tasks.taskId}>{task.taskName}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add new task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addNewTask}>Submit</button>
    </>
  );
};
