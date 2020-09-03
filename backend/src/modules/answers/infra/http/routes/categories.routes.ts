import { Router } from 'express';

import CategoriesController from '@modules/answers/infra/http/controller/CategoriesController';

const categoriesRouter = Router();

const categoriesController = new CategoriesController();

categoriesRouter.get('/', categoriesController.index);
categoriesRouter.post('/', categoriesController.create);

export default categoriesRouter;
