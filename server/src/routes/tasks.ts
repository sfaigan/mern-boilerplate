import { Router } from "express";
import { TasksController } from "../controllers/tasks";

const router = Router();

router.post("/", (req, res) => TasksController.create(req, res));
router.get("/", (req, res) => TasksController.get(req, res));
router.get("/:id", (req, res) => TasksController.getById(req, res));
router.put("/:id", (req, res) => TasksController.update(req, res));
router.delete("/:id", (req, res) => TasksController.remove(req, res));

export default router;
