import  dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connectToDB from "./Config/DBConfig";
import  {StatusCodes} from  'http-status-codes';
const app: Application = express();
const port = process.env.PORT  || 8000;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
// Routes
app.get('/api/v1/test/', (req: Request, res: Response) => {
    res.send("Testing our APIs");
});
// Start the server
const runServer = async () => {
    try {
        await connectToDB();
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
};

// Global Error Handling
app.use((err: any, req: Request, res: Response, next: Function) => {
    console.error(err.stack);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something broke!');
});

runServer();

