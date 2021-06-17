import dotenv from 'dotenv';
import express from 'express';
import { routes } from './routes';

const app = express();

dotenv.config();

routes(app);

app.listen(3100);