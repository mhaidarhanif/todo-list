import { TaskCard } from "../components/task-card";
import { Button } from "../components/button";
import { useLocalStorage } from "@uidotdev/usehooks";
import { initialTasks } from "../modules/task/data";

export function HomeRoute() {
  const [tasks, setTasks] = useLocalStorage("tasks", initialTasks);

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = String(formData.get("title"));

    const newTask = {
      id: tasks[tasks.length - 1].id + 1,
      title: title,
      completed: false,
      date: new Date(),
    };

    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);

    event.currentTarget.reset();
  }

  function removeTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <div className="p-4 space-y-10">
      <h1 className="text-3xl">Todo List</h1>

      <form
        onSubmit={addTask}
        method="post"
        className="flex flex-col gap-2 max-w-xs"
      >
        <label htmlFor="title">Task title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Task title"
          className="p-2 border"
        />
        <Button type="submit" className="p-2 bg-blue-300">
          Add Task
        </Button>
      </form>

      <ul className="space-y-8">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <TaskCard task={task} removeTask={removeTask} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
