import { model, Schema, Document } from "mongoose";

export interface TaskDoc extends Document {
  title: string;
  description?: string;
}

const TaskSchema = new Schema({
  title: String,
  description: {
    type: String,
    required: false,
  },
});

export const Task = model<TaskDoc>("Task", TaskSchema);
