import { Router } from "express";
import { addUsers, loginUser } from "../controller/user.js";
const user = Router();
user.route("/").post(addUsers);
user.route("/login").post(loginUser);
export { user };
