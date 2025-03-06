
import {Request, Response, NextFunction } from 'express'
import HttpStatus from 'http-status-codes';
import {MomentService} from "./moment.service";

class MomentController{
    public async index(
        request: Request,
        response: Response,
        next: NextFunction,
    ) {
        try{

            const momentService = new MomentService();

            const handler = await momentService.listMoments();

            response.status(HttpStatus.OK)
                .json({
                    message: "Lista de mometnos",
                    status: true,
                    data: handler
                })


        }catch(err){
            next(err)
        }
    }

    public async store(
        request:Request,
        response: Response,
        next: NextFunction
    ) {
        try{

            const { name } = request.body;

            const momentService = new MomentService();

            const handler = await momentService.createMoment({ name });

            response.status(HttpStatus.CREATED)
                .json({
                    message: "Criado com sucesso.",
                    status: true,
                    data: handler
                })

        }catch(err){
            next(err);
        }
    }

    public async destroy(
        request:Request,
        response: Response,
        next: NextFunction
    ) {
        try{

            const { id } = request.params;

            const momentService = new MomentService();

            const handler = await momentService.destroyMoment(id);

            response.status(HttpStatus.OK)
                .json({
                    message: "Deletado com sucesso.",
                    status: true
                })

        }catch(err){
            next(err);
        }
    }
}

export { MomentController };