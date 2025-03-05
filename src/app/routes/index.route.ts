import { Router, Request, Response } from 'express';
import {authRoutes} from "../contexts/Auth/auth.routes";
import {userRoutes} from "../contexts/User/user.routes";


const routes = Router();


routes.get("/", (_: Request, response: Response) => {
    response.status(200).json({
        message: "OK"
    })
})

routes.use("/auth", authRoutes);
routes.use("/user", userRoutes  );

export { routes }