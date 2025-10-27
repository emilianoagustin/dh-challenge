"use client";

import Link from "next/link";
import { ITaskCardProps } from "@/types/task";

export default function TaskCard({ task, onToggle, onDelete }: ITaskCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-start gap-3 flex-1">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={onToggle}
            className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
          />
          <div className="flex-1">
            <h3
              className={`text-lg font-semibold ${
                task.completed ? "line-through text-gray-400" : "text-gray-900"
              }`}
            >
              {task.title}
            </h3>
            <p className="text-gray-600 mt-1 text-sm">{task.description}</p>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            task.completed
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {task.completed ? "Completed" : "Active"}
        </span>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <Link
          href={`/tasks/${task.id}`}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition text-center text-sm"
        >
          View Details
        </Link>
        <button
          onClick={onDelete}
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition text-sm cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
