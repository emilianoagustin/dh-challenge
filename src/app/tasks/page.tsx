import TasksList from "@/components/TasksList";

export default async function TasksPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">All Tasks</h1>
      <TasksList />
    </div>
  );
}
