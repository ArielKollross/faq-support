import { Router } from 'express';

import issuesRouter from './issues.routes';

const routes = Router();

routes.use('/'), issuesRouter);

export default routes;
