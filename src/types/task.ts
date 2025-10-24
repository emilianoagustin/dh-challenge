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
