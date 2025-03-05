import { Router } from 'express'
import { UserController } from './user.controller';

const userController = new UserController();

const userRoutes = Router();


userRoutes.post("/create", userController.store);


export {userRoutes}

