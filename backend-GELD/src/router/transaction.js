import { Router } from "express";
import { takeRecords, addRecords } from "../controller/transaction.js";
const transaction = Router();
transaction.route("/").get(takeRecords);
transaction.route("/transaction").post(addRecords);
export { transaction };
