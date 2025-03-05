import cors from 'cors';
import express, {Request, Response, NextFunction} from 'express';
import pino from 'pino';
import {Exception} from "./middlewares/exception.middleware";
import {routes} from "./routes/index.route";

const app = express();

const logger = pino({
    level: "error"
})

app.use(cors())

app.use(express.json())

app.use("/api", routes);




app.use("*", (req: Request, res: Response) => {
    throw new Exception(`A rota da requisição não encontrada`, 404);
});


app.use((error: Error | Exception, request: Request, response: Response, _next: NextFunction)=> {
    logger.error(error);

    if(error instanceof Exception) {
        response.status(error.statusCode)
            .json({
                status: false,
                statusCode: error.statusCode,
                message: error.message,
            })

        return;
    }

    response.status(500).json({
        status: 'error',
        message: ' Internal server error',
    })

})



export { app }