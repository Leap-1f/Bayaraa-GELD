import express from "express";
import cors from "cors";
import { user } from "./src/router/user.js";
import { category } from "./src/router/category.js";
import { transaction } from "./src/router/transaction.js";
const port = 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", user);
app.use("/category", category);
app.use("/transaction", transaction);
app.listen(port, () => {
  console.log(`server port ${port}`);
});
