import { Router } from 'express';

import IssuesController from '@modules/issues/infra/http/controllers/IssuesController';

const issuesRouter = Router();

const issuesController = new IssuesController();

issuesRouter.get('/', issuesController.index);
issuesRouter.post('/', issuesController.create);
issuesRouter.delete('/:id', issuesController.delete);

export default issuesRouter;
