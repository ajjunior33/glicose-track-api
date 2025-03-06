import { Router } from 'express';
import {MomentController} from "./moment.controller";


const momentController = new MomentController();

const momentRoutes = Router();


momentRoutes
    .get("/", momentController.index)
    .post("/", momentController.store)
    .delete("/:id", momentController.destroy)


export { momentRoutes };