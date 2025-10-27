import { api } from "@/lib/api";
import TasksClient from "./TasksClient";

export const revalidate = 60;

export default async function TasksPage() {
  try {
    const tasks = await api.getTasks();

    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Tasks</h1>
        <TasksClient initialTasks={tasks} />
      </div>
    );
  } catch (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Tasks</h1>
        <TasksClient initialTasks={[]} />
      </div>
    );
  }
}
