import {Request, Response, NextFunction} from "express";
import {UserService} from "./user.service";

class UserController{
    public async store(
        request: Request,
        response: Response,
        next: NextFunction
    ){

        try{
            const { name, email, password } = request.body;
            const userService = new UserService();
            const handler = await userService.createUser({ name, email, password });
            response.status(200)
                .json({
                    message: "Usuário criado com sucesso.",
                    status: true,
                    data: handler
                })
        }catch(err){
            next(err);
        }
    }
}

export { UserController }