import express from "express";
const app = express();
export default app;

// TODO: this file!
import employeesRouter from "#api/employees";

app.use(express.json());

app.use("/", employeesRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong :(");
});
