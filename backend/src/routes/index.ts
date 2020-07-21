import { Router } from 'express';

import issuesRouter from './issues.routes';
import categoriesRouter from './categories.routes';

const routes = Router();

routes.use(('/issues'), issuesRouter );
routes.use(('/categories'), categoriesRouter );

export default routes;
