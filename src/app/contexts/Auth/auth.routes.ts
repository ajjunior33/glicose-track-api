import { Router } from 'express'
import { AuthController } from './auth.controller';

const authController = new AuthController();

const authRoutes = Router();

authRoutes.post("/", authController.createSession);


export { authRoutes}