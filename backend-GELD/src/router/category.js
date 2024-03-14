import { Router } from "express";
import { takeCategory, addCategory } from "../controller/category.js";
const category = Router();
category.route("/").get(takeCategory);
category.route("/categories").post(addCategory);
export { category };
