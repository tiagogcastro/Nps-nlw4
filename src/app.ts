import 'reflect-metadata';
import express, { Request, Response, NextFunction} from 'express';
import { router } from './routes';

import createConnection from './database';

createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app }