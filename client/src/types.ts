// TODO: Find a better way to share interfaces without introducing an entire shared package
export interface Task {
  _id: string;
  title: string;
  description?: string;
}

export type TaskAdd = Pick<Task, "title">;
export type TaskUpdate = Partial<Pick<Task, "title" | "description">>;
