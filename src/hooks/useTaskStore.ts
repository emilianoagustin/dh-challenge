import { useTaskStore as useStore } from "@/store/taskStore";
import { useMemo } from "react";

export const useTaskStore = () => {
  const {
    tasks,
    filter,
    setTasks,
    addTask,
    removeTask,
    toggleTask,
    setFilter,
  } = useStore();

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "active":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const stats = useMemo(
    () => ({
      total: tasks.length,
      completed: tasks.filter((task) => task.completed).length,
      active: tasks.filter((task) => !task.completed).length,
    }),
    [tasks]
  );

  return {
    tasks: filteredTasks,
    filter,
    stats,
    setTasks,
    addTask,
    removeTask,
    toggleTask,
    setFilter,
  };
};
