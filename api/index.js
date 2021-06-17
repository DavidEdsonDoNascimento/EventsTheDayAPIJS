import 'dotenv/config';
import express from 'express';
import { routes } from './routes';

const app = express();

routes(app);

app.listen(3100);