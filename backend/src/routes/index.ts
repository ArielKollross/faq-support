import { Router } from 'express';

import issuesRouter from './issues.routes';

const routes = Router();

routes.use(('/issues'), issuesRouter );

export default routes;
