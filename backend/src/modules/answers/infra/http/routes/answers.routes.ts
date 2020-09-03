import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';

import AnswersController from '@modules/answers/infra/http/controller/AnswersController';

const answersRouter = Router();

const answersController = new AnswersController();

answersRouter.get('/', answersController.index);
answersRouter.post('/', ensureAuthenticated, answersController.create);

export default answersRouter;
