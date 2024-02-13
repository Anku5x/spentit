import express from "express";
import {
  getAllTransactions,
  addTransaction,
  deleteTransactions,
} from "../controllers/transactionCtrl.js";
//router object declaration, express has router built in.
const transactionRouter = express.Router();
//route for posting new transactions:
transactionRouter.post("/add-transaction", addTransaction);
//route for getting user's transactions:
//post because it's posting userid
transactionRouter.post("/get-transactions", getAllTransactions);
//delete transactions
transactionRouter.post("/delete-transaction", deleteTransactions);
//export
export  {transactionRouter };
