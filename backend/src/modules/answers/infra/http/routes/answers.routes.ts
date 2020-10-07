import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated';

import AnswersController from '@modules/answers/infra/http/controller/AnswersController';
import HelpfulController from '@modules/answers/infra/http/controller/HelpfulController';
import UnhelpfulController from '@modules/answers/infra/http/controller/UnhelpfulController';

const answersRouter = Router();

const answersController = new AnswersController();
const helpfulController = new HelpfulController();
const unhelpfulController = new UnhelpfulController();

answersRouter.get('/', answersController.index);
answersRouter.post('/', ensureAuthenticated, answersController.create);
answersRouter.delete('/:id', ensureAuthenticated, answersController.delete);

answersRouter.put('/helpful/:id', helpfulController.update);
answersRouter.put('/unhelpful/:id', unhelpfulController.update);

export default answersRouter;
