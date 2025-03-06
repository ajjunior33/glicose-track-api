import {Router} from "express";
import { MeasurementController } from './measurement.controller'
import {AuthenticateMiddleware} from "../../middlewares/authenticate.middleware";

const measurementController = new MeasurementController();

const measurementRoutes = Router();

measurementRoutes.get("/", AuthenticateMiddleware, measurementController.index);
measurementRoutes.post("/", AuthenticateMiddleware, measurementController.store);

export { measurementRoutes}