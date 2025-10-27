"use client";

import { useRouter } from "next/navigation";
import TaskForm from "@/components/TaskForm";
import { useTasks } from "@/hooks/useTasks";
import { useTaskStore } from "@/hooks/useTaskStore";
import { TaskFormData } from "@/lib/validation";

export default function CreateTaskPage() {
  const router = useRouter();
  const { createTask, isCreating } = useTasks();
  const { addTask } = useTaskStore();

  const handleSubmit = (data: TaskFormData) => {
    console.log(data);
    createTask(data, {
      onSuccess: (newTask) => {
        addTask(newTask);
        router.push("/tasks");
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Create New Task</h1>
      <p className="text-gray-600 mb-8">
        Fill in the details below to create a new task
      </p>
      <TaskForm onSubmit={handleSubmit} isSubmitting={isCreating} />
    </div>
  );
}
