import { Router, Request, Response } from 'express';
import {authRoutes} from "../contexts/Auth/auth.routes";
import {userRoutes} from "../contexts/User/user.routes";
import {measurementRoutes} from "../contexts/Measurement/measurement.routes";
import {momentRoutes} from "../contexts/Moment/moment.routes";


const routes = Router();


routes.get("/", (_: Request, response: Response) => {
    response.status(200).json({
        message: "OK"
    })
})

routes
    .use("/auth", authRoutes)
    .use("/user", userRoutes)
    .use("/measurement", measurementRoutes)
    .use("/moment", momentRoutes)

export { routes }