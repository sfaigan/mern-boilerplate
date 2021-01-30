import { Request, Response } from "express";
import { Task, TaskDoc } from "../models/task";

const getById = async (req: Request, res: Response): Promise<void> => {
  const id = req?.params?.id;
  console.log(`HTTP GET /tasks/${id}`);

  try {
    const task = await Task.findById(id);
    res.send(task);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const get = async (req: Request, res: Response): Promise<void> => {
  console.log(`HTTP GET /tasks`);

  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const create = async (req: Request, res: Response): Promise<void> => {
  console.log(`HTTP POST /tasks`);

  const title = req.body.title;
  const description = req.body.description ?? undefined;

  const task = new Task({ title, description });

  try {
    const result = await task.save();
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const update = async (req: Request, res: Response): Promise<void> => {
  const id = req?.params?.id;
  console.log(`HTTP PUT tasks/${id}`);

  const update: Partial<TaskDoc> = {};

  if ("title" in req.body) {
    update["title"] = req.body.title;
  }

  if ("description" in req.body) {
    update["description"] = req.body.description;
  }

  if (Object.keys(update).length === 0) {
    res.sendStatus(400);
    return;
  }

  const options = { new: true };

  try {
    const task = await Task.findByIdAndUpdate(id, update, options);
    res.status(200).send(task);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const remove = async (req: Request, res: Response): Promise<void> => {
  const id = req?.params?.id;
  console.log(`HTTP DELETE /tasks/${id}`);

  try {
    await Task.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const TasksController = {
  getById,
  get,
  create,
  update,
  remove,
};
