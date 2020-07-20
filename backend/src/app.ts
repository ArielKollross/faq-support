import express from 'express';

import routes from './routes';

import CreateConnection from './database';

CreateConnection();
const app = express();

app.use(express.json());

export default app;
