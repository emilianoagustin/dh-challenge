export interface ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  userId: number;
}

export interface ICreateTaskInput {
  title: string;
  description: string;
}

type filter = "all" | "completed" | "active";

export interface ITaskState {
  tasks: ITask[];
  filter: filter;
  setTasks: (tasks: ITask[]) => void;
  addTask: (task: ITask) => void;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
  setFilter: (filter: filter) => void;
}
