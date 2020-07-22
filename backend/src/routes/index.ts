import { Router } from 'express';

import issuesRouter from './issues.routes';
import categoriesRouter from './categories.routes';
import usersRouter from './users.routes';
import answersRouter from './answers.routes';

const routes = Router();

routes.use(('/issues'), issuesRouter );
routes.use(('/categories'), categoriesRouter );
routes.use(('/users'), usersRouter );
routes.use(('/answers'), answersRouter );


export default routes;
