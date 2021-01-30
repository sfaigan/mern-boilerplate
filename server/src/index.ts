import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import tasksRouter from "./routes/tasks";

dotenv.config();

const PORT = process.env.SERVER_PORT || 3001;
const DB_URI =
  process.env.DB_URI || "mongodb://127.0.0.1:27017/mern-boilerplate";

const app = express();
app.use(cors());
app.use(express.json());

try {
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
} catch (err) {
  console.log(err);
}

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/api/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
