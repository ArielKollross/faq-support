import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateCategoryService from '../service/CreateCategoryService';

import Category from '../models/Category';

const categoriesRouter = Router();

categoriesRouter.get('/', async (request, response) => {
	const categoriesRepository = getRepository(Category);

	const category = await categoriesRepository.find();

	return response.json(category);
});

categoriesRouter.post('/', async (request, response) => {
	const { name } = request.body;

	const createCategory = new CreateCategoryService();

	const category = await createCategory.execute(name);

	return response.json(category);

});


export default categoriesRouter;
