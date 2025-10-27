import Link from "next/link";
import { ITaskDetailProps } from "@/types/task";

export default function TaskDetail({ task }: ITaskDetailProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/tasks"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
      >
        ← Back to Tasks
      </Link>

      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{task.title}</h1>
          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              task.completed
                ? "bg-green-100 text-green-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {task.completed ? "Completed" : "Active"}
          </span>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Description
            </h2>
            <p className="text-gray-600 leading-relaxed">{task.description}</p>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Task Details
            </h2>
            <dl className="space-y-3">
              <div className="flex justify-between">
                <dt className="text-gray-600">Task ID:</dt>
                <dd className="font-medium text-gray-900">{task.id}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">User ID:</dt>
                <dd className="font-medium text-gray-900">{task.userId}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Status:</dt>
                <dd className="font-medium text-gray-900">
                  {task.completed ? "Completed" : "In Progress"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
