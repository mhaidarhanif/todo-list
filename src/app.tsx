import { useState } from "react";
import { ButtonSmall } from "./components/button";
import { ButtonCounter } from "./components/button-counter";

const initialTasks = [
  {
    id: 1,
    title: "Breakfast",
    completed: true,
    date: new Date("2025-05-20 8:00"),
  },
  {
    id: 2,
    title: "Go to work room",
    completed: false,
    date: new Date("2025-05-20 9:00"),
  },
  {
    id: 3,
    title: "Coding",
    completed: false,
    date: new Date("2025-05-20 10:00"),
  },
  {
    id: 4,
    title: "Lunch",
    completed: false,
    date: new Date("2025-05-20 12:00"),
  },
  {
    id: 5,
    title: "Meeting",
    completed: false,
    date: new Date("2025-05-20 13:00"),
  },
  {
    id: 6,
    title: "Working on projects",
    completed: false,
    date: new Date("2025-05-20 15:00"),
  },
  {
    id: 7,
    title: "Watch anime",
    completed: false,
    date: new Date("2025-05-20 17:00"),
  },
  {
    id: 8,
    title: "Dinner",
    completed: false,
    date: new Date("2025-05-20 19:00"),
  },
  {
    id: 9,
    title: "Sleep",
    completed: false,
    date: new Date("2025-05-20 22:00"),
  },
];

export function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function removeTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <div className="p-4 space-y-10">
      <h1 className="text-3xl">Todo List</h1>

      <ButtonCounter />

      <ul className="space-y-8">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <h2 className="text-xl font-bold">{task.title}</h2>
              <p className="font-bold">
                {task.completed ? (
                  <span className="text-green-500">🟢 Completed</span>
                ) : (
                  <span className="text-yellow-500">🟡 Incomplete</span>
                )}
              </p>
              <p>
                <span className="font-bold">Date Time: </span>
                <span>{task.date.toLocaleString()}</span>
              </p>

              <ButtonSmall onClick={() => removeTask(task.id)}>
                Delete
              </ButtonSmall>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
