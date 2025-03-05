import {IAuth} from "./interface/auth.interface";
import {UserService} from "../User/user.service";
import {Exception} from "../../middlewares/exception.middleware";
import {mathPassword} from "../../helpers/math-password.helper";
import {generateJwtToken} from "../../helpers/generate-jwt-token.helper";

class AuthService {

    public async createSession({ email, password}: IAuth){
        const userService = new UserService();
        const user = await userService.findByEmail(email);

        if(!user){
            throw new Exception("Usuario ou senha inválidos", 401);
        }

        const validatePassword = await mathPassword(password, user.password);

        if(!validatePassword){
            throw new Exception("Usuario ou senha inválidos", 401);
        }

        const token = await generateJwtToken(user);

        return {
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            },
            access_token: token
        }


    }

}

export {AuthService}