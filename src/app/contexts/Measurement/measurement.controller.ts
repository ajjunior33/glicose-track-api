import {Request, Response, NextFunction} from "express";
import {MeasurementService} from "./measurement.service";

class MeasurementController {

    public async index(req: Request, res: Response, next: NextFunction){
        try{

            const userId = req.userId as string;

            const measurementService = new MeasurementService();

            const handler = await measurementService.list(userId)


            res.status(200)
                .json({
                    message: "Lista de measurement",
                    status: true,
                    data: handler
                })

        }catch(err){
            next(err);
        }
    }

    public async store(req: Request, res: Response, next: NextFunction) {
        try{

            const userId = req.userId as string;
            const {
                level,
                date,
                moment,
                time,
                note,
                rapidInsulin,
                slowInsulin,
            } = req.body;

            const measurementService = new MeasurementService();

            const handler = await measurementService.create({
                level,
                date,
                moment,
                time,
                note,
                rapidInsulin,
                slowInsulin,
                userId
            })



            res.status(200)
                .json({
                    message: "Lista de measurement",
                    status: true,
                    data: handler
                })

        }catch(err){
            next(err);
        }
    }

}

export { MeasurementController }