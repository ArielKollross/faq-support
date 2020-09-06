import { Request, Response } from 'express';

import CategoryRepository from '@modules/answers/infra/typeorm/repositories/CategoryRepository';
import CreateCategoryService from '@modules/answers/services/CreateCategoryService';

export default class CategoriesController {
	public async index(request: Request, response: Response): Promise<Response> {
		const categoriesRepository = new CategoryRepository();

		const categories = await categoriesRepository.find();

		return response.json(categories);
	}

	public async create(request: Request, response: Response): Promise<Response> {
		const { name } = request.body;

		const categoriesRepository = new CategoryRepository();
		const createCategory = new CreateCategoryService(categoriesRepository);

		const category = await createCategory.execute(name);

		return response.json(category);
	}
}
