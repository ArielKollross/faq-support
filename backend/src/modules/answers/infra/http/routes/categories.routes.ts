import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middleware/ensureAuthenticated';

import CategoriesController from '@modules/answers/infra/http/controller/CategoriesController';

const categoriesRouter = Router();

const categoriesController = new CategoriesController();

categoriesRouter.get('/', ensureAuthenticated, categoriesController.index);
categoriesRouter.post('/', ensureAuthenticated, categoriesController.create);

export default categoriesRouter;
