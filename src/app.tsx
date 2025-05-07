const tasks = [
  {
    id: 1,
    title: "Breakfast",
    completed: true,
    date: new Date("2025-05-08 7:00"),
  },
  {
    id: 2,
    title: "Go to office",
    completed: false,
    date: new Date("2025-05-08 9:00"),
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
            </li>
          );
        })}
      </ul>
    </div>
  );
}
