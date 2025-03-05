import jwt, {DecodeOptions} from 'jsonwebtoken';
import {config} from '../../config/index.config';
import {Exception} from '../middlewares/exception.middleware';

function decodedJwtToken(token: string) {
    try{
        return jwt.decode(token, config.APPLICATION_TOKEN as DecodeOptions)
    }catch(err){
        throw new Exception("Houve um erro na autenticação..", 401)
    }
}

export { decodedJwtToken };
