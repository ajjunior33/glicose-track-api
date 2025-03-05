import { Request, Response, NextFunction } from 'express'
import {AuthService} from "./auth.service";
class AuthController {
    public async createSession(req: Request, res: Response, next: NextFunction) {
        try{
            const { email, password } = req.body;
            const authService = new AuthService();

            const handler  = await authService.createSession({email, password});
            res.status(200)
                .json({
                    message: "Sessão criada com sucesso.",
                    status: true,
                    data:  handler
                })
        }catch(err){
            next(err)
        }
    }

}

export {AuthController}