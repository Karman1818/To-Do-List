import { useState } from "react";

type Task = {
  taskName: string;
  taskId: number;
  isMade: boolean;
};

export const ToDoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {
    const newTaskObject: Task = {
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
          <li key={task.taskId}>{task.taskName}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add new task"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button onClick={addNewTask}>Submit</button>
    </>
  );
};
