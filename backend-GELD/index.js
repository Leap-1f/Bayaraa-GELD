import express, { response } from "express";
import cors from "cors";
import fs from "fs";
import { user } from "./mock/user.js";
const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/login", (req, res) => {
  res.send(user);
});

app.listen(port, () => {
  console.log(`server port ${port}`);
});
