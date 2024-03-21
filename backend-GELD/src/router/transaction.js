import { Router } from "express";
import { takeRecords, addRecords } from "../controller/transaction.js";
const transaction = Router();
transaction.route("/").get(takeRecords);
transaction.route("/transactions").post(addRecords);
export { transaction };
