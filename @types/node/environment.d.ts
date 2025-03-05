declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            NODE_ENV: string;
            DATABASE_URL: string;
        }
    }
    namespace Express {
        interface Request {
            userId?: string | undefined;
        }
    }
}
export { };
