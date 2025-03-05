import {compare} from 'bcryptjs';
import HttpStatus from 'http-status-codes';
import {Exception} from '../middlewares/exception.middleware';

async function mathPassword(password: string, hashed: string): Promise<boolean> {

    try{

        return await compare(password, hashed);

    } catch(err) {
        throw new Exception("Usuário ou senha inválidos.", HttpStatus.UNAUTHORIZED);
    }

}

export { mathPassword };

