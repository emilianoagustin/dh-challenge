import { create } from "zustand";
import { ITaskState } from "@/types/task";

export const useTaskStore = create<ITaskState>((set) => ({
  tasks: [],
  filter: "all",
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  setFilter: (filter) => set({ filter }),
}));
