import express from "express";
import {deleteUser} from "../controllers/deleteUserCtrl.js"
//router object declaration, express has router built in.
const deleteRouter = express.Router();
//getting user id from frontend and POSTING it here
deleteRouter.post('/delete-user', deleteUser);

export  {deleteRouter };