import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';

import sessionMiddleware from '@middleware/session.middleware';
import errorHandlerMiddleware from '@middleware/errorHandler.middleware';
import notFoundPageMiddleware from '@middleware/notFoundPage.middleware';
import routes from './api/index';

// Application
const app: Express = express();

// app setting
app.enable('trust proxy');

// middlewares
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(sessionMiddleware);

// root route
app.get('/api/v1', (req, res) => {
    res.send('<h2>WELCOME</h2>');
    console.log(req.ip);
    console.log(req.hostname);
    console.log('yeah it run');
});

// routes
app.use('/api/v1', routes());

// not found page 404
app.use(notFoundPageMiddleware);

// error handling
app.use(errorHandlerMiddleware);

export default app;
