import { Router } from 'express';

import issuesRouter from './issues.routes';
import categoriesRouter from './categories.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use(('/issues'), issuesRouter );
routes.use(('/categories'), categoriesRouter );
routes.use(('/users'), usersRouter );

export default routes;
