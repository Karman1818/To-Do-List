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
      isMade: true,
    };
    setTasks((prevTasks) => [...prevTasks, newTaskObject]);
    setNewTask("");
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.taskId != id));
  };

  const isTaskChecked = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskId === id ? { ...task, isMade: !task.isMade } : task
      )
    );
  };

  const editTask = (id: number) => {
    const name: string | null = prompt("What task do you want instead");
    if (name !== null) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.taskId === id ? { ...task, taskName: name } : task
        )
      );
    }
  };

  return (
    <>
      <h1>To-Do-List</h1>
      <h3>things you have to do today:</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.taskId}>
            {task.taskName}
            <input
              type="checkbox"
              onClick={() => isTaskChecked(task.taskId)}
            ></input>
            <button onClick={() => deleteTask(task.taskId)}>Delete</button>
            <button onClick={() => editTask(task.taskId)}>Edit</button>
          </li>
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
