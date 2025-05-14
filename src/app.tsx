import { Button } from "./components/button";

const tasks = [
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
  return (
    <div>
      <h1>Todo List</h1>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <h2>{task.title}</h2>
              <p>{task.completed ? "Completed" : "Incomplete"}</p>
              <p>Date Time: {task.date.toLocaleString()}</p>
              <Button>Delete</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
