import express, { json } from 'express';
import "express-async-errors";
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/authRouter';
import mainRouter from './routes/mainRouter';
import errorHandler from './middlewares/errorHandler';


const app = express();

dotenv.config();

app.use(cors());
app.use(json());

app.use(authRouter);
app.use(mainRouter);



app.use(errorHandler);

const PORT: number = Number(process.env.PORT) || 5009;

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

