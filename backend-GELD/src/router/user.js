import { Router } from "express";
import { getAllUsers } from "../controller/user.js";
import { addUsers } from "../controller/user.js";
const user = Router();
user.route("/").get(getAllUsers);
user.route("/").post(addUsers);
export { user };
