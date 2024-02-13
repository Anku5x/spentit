import express from 'express'
import { loginController, registerController } from '../controllers/userController.js';
//router object declaration, express has router built in. 
const userRouter = express.Router();
//routes
//POST for Login
userRouter.post('/login', loginController);
//Register page
userRouter.post('/register', registerController);
export {userRouter};