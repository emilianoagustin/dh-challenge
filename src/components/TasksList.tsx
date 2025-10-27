"use client";

import { useEffect } from "react";
import { useTaskStore } from "@/hooks/useTaskStore";
import { useTasks } from "@/hooks/useTasks";
import TaskCard from "@/components/TaskCard";

export default function TasksList() {
  const { tasks, filter, stats, setTasks, toggleTask, removeTask, setFilter } =
    useTaskStore();
  const { tasks: taskQuery = [], deleteTask } = useTasks();

  useEffect(() => {
    if (taskQuery.length > 0) setTasks(taskQuery);
  }, [taskQuery, setTasks]);

  const handleDelete = (id: number) => {
    removeTask(id);
    deleteTask(id);
  };

  if (tasks.length === 0 && taskQuery.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">
          No tasks found. Create your first task!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
            <p className="text-gray-600">Total Tasks</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">
              {stats.completed}
            </p>
            <p className="text-gray-600">Completed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-600">{stats.active}</p>
            <p className="text-gray-600">Active</p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`flex-1 py-2 px-4 rounded-lg transition cursor-pointer ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`flex-1 py-2 px-4 rounded-lg transition cursor-pointer ${
              filter === "active"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`flex-1 py-2 px-4 rounded-lg transition cursor-pointer ${
              filter === "completed"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={() => toggleTask(task.id)}
            onDelete={() => handleDelete(task.id)}
          />
        ))}
      </div>
    </>
  );
}
