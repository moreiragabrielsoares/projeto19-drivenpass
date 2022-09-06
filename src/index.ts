import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();

dotenv.config();

app.use(cors());
app.use(json());







const PORT: number = Number(process.env.PORT) || 5009;

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

