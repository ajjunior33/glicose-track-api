import {IAuth} from "./interface/auth.interface";
import {UserService} from "../User/user.service";
import {Exception} from "../../middlewares/exception.middleware";
import {mathPassword} from "../../helpers/math-password.helper";
import {generateJwtToken} from "../../helpers/generate-jwt-token.helper";
import {CreateSessionDto} from "./dto/create-session.dto";
import HttpStatus from 'http-status-codes'
import {UserFactory} from "../User/user.factory";

class AuthService {

    public async createSession({ email, password}: CreateSessionDto) : Promise<IAuth>{
        const userService = new UserService();
        const user = await userService.findByEmail(email);

        if(!user){
            throw new Exception("Usuario ou senha inválidos", HttpStatus.UNAUTHORIZED);
        }

        const validatePassword = await mathPassword(password, user.password);

        if(!validatePassword){
            throw new Exception("Usuario ou senha inválidos", HttpStatus.UNAUTHORIZED);
        }

        const token = generateJwtToken(user);

        return {
            user: await UserFactory.getUser(user),
            access_token: token
        }


    }

}

export {AuthService}