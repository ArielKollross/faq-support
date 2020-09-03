import { Router } from 'express';

import issuesRouter from '@modules/issues/infra/http/routes/issues.routes';
import categoriesRouter from '@modules/answers/infra/http/routes/categories.routes';
import answersRouter from '@modules/answers/infra/http/routes/answers.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/issues', issuesRouter);
routes.use('/categories', categoriesRouter);
routes.use('/users', usersRouter);
routes.use('/answers', answersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
