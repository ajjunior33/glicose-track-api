import dotenv from 'dotenv';
import http from 'http';
import { app } from './app/app'

dotenv.config();

const server = http.createServer(app);

const port = process.env.PORT || 3333;

server.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});