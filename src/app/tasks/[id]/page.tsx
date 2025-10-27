import { api } from "@/lib/api";
import { notFound } from "next/navigation";
import TaskDetail from "@/components/TaskDetail";
import { ITaskDetailPageProps } from "@/types/task";

export default async function TaskDetailPage({ params }: ITaskDetailPageProps) {
  try {
    const { id } = await params;
    const task = await api.getTaskById(id);

    return <TaskDetail task={task} />;
  } catch (error) {
    notFound();
  }
}
