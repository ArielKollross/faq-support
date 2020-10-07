import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated';

import IssuesController from '@modules/issues/infra/http/controllers/IssuesController';

const issuesRouter = Router();

const issuesController = new IssuesController();

issuesRouter.get('/', ensureAuthenticated, issuesController.index);
issuesRouter.post('/', issuesController.create);
issuesRouter.delete('/:id', ensureAuthenticated, issuesController.delete);

export default issuesRouter;
