import { NextFunction, Request, Response } from "express";
import HttpStatus from 'http-status-codes';
import { decodedJwtToken } from "../helpers/decoded-jwt-token.helper";

const AuthenticateMiddleware = async (request: Request, response: Response, next: NextFunction) => {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        response.status(HttpStatus.UNAUTHORIZED).json({
            message: "Você precisa informar um token."
        });
        return;
    }

    const parts = authHeader.split(" ");
    if (parts.length !== 2) {
        response.status(HttpStatus.UNAUTHORIZED).json({
            message: "Token inválido."
        });
        return;
    }

    const [schema, token] = parts;

    if (!/^Bearer$/i.test(schema)) {
        response.status(HttpStatus.UNAUTHORIZED).json({
            message: "Token mal formatado."
        });
        return;
    }


    const decoded = decodedJwtToken(token);

    if (decoded) {
        request.userId = decoded.sub as string;
        next();

        return;
    }

    response.status(HttpStatus.UNAUTHORIZED).json({
        message: "Não foi possível autenticar o usuário."
    });
    return;


}

export { AuthenticateMiddleware };
