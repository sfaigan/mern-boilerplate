import axios, { AxiosResponse } from "axios";
import { Task, TaskAdd, TaskUpdate } from "./types";
import { useState } from "react";

const BASE_PATH = "/api/tasks";

interface UseTasksHook {
  tasks: Task[];
  getTasks: () => Promise<void>;
  addTask: (task: TaskAdd) => Promise<void>;
  updateTask: (taskId: string, update: TaskUpdate) => Promise<void>;
  deleteTask: (taskId: string) => Promise<void>;
}

export const useTasksAPI = (): UseTasksHook => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const getTasks = async () => {
    try {
      const res: AxiosResponse<Task[]> = await axios.get(BASE_PATH);
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTask = async (task: TaskAdd) => {
    try {
      await axios.post(BASE_PATH, task);
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const updateTask = async (taskId: string, update: TaskUpdate) => {
    try {
      await axios.put(BASE_PATH + "/taskId", update);
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (taskId: string) => {
    try {
      await axios.delete(`${BASE_PATH}/${taskId}`);
      getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return { tasks, getTasks, addTask, updateTask, deleteTask };
};
