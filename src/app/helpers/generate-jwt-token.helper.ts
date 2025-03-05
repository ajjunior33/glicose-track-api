import jwt from 'jsonwebtoken';
import {config} from '../../config/index.config';


function generateJwtToken(user: any) {
    const payload = {
        email: user.email,
        sub: user.id,
    }

    const options = {
        expiresIn: config.APPLICATION_EXPIRE_IN_TOKEN
    } as jwt.SignOptions

    const  secretOrPrivateKey= config.APPLICATION_TOKEN as jwt.Secret;

    return jwt.sign(payload, secretOrPrivateKey, options);
}

export { generateJwtToken };
