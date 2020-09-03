import { Request, Response } from 'express';

import { getRepository } from 'typeorm';

import Category from '@modules/answers/infra/typeorm/entities/Category';
import CreateCategoryService from '@modules/answers/services/CreateCategoryService';

export default class CategoriesController {
	public async index(request: Request, response: Response): Promise<Response> {
		const categoriesRepository = getRepository(Category);

		const category = await categoriesRepository.find();

		return response.json(category);
	}

	public async create(request: Request, response: Response): Promise<Response> {
		const { name } = request.body;

		const createCategory = new CreateCategoryService();

		const category = await createCategory.execute(name);

		return response.json(category);
	}
}
