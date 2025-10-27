import { ITask, ICreateTaskInput } from "@/types/task";
import { API_URL } from "@/constants/constants";

export const api = {
  async getTasks(): Promise<ITask[]> {
    const response = await fetch(`${API_URL}/todos?_limit=10`);
    if (!response.ok) throw new Error("Failed to fetch tasks");
    const tasks = await response.json();
    return tasks.map((task: ITask) => ({
      ...task,
      description: `Description for ${task.title}`,
    }));
    // return tasks.map((task: ITask) => ({
    //   id: task.id,
    //   title: task.title,
    //   description: `Description for ${task.title}`,
    //   completed: task.completed,
    //   userId: task.userId,
    // }));
  },

  async getTaskById(id: string): Promise<ITask> {
    const response = await fetch(`${API_URL}/todos/${id}`);
    if (!response.ok) throw new Error("Failed to fetch task");
    const task = await response.json();
    return {
      ...task,
      description: `Description for ${task.title}`,
    };
    // return {
    //   id: task.id,
    //   title: task.title,
    //   description: `Description for ${task.title}`,
    //   completed: task.completed,
    //   userId: task.userId,
    // };
  },

  async createTask(data: ICreateTaskInput): Promise<ITask> {
    const response = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, completed: false, userId: 1 }),
    });
    if (!response.ok) throw new Error("Failed to create task");
    return response.json();
  },

  async deleteTask(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/todos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete task");
  },
};
