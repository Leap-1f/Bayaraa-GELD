import { Router } from "express";
import { addUsers, loginUser, testController } from "../controller/user.js";
const user = Router();

user.route("/").post(addUsers).get(testController);
user.route("/login").post(loginUser);
export { user };
