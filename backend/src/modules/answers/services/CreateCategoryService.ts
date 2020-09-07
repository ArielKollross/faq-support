import Category from '@modules/answers/infra/typeorm/entities/Category';
import ICategoryRepository from '@modules/answers/repositories/ICategoryRepository';

import AppError from '@shared/errors/AppError';

class CreateCategory {
	constructor(private categoriesRepository: ICategoryRepository) {}

	public async execute(name: string): Promise<Category> {
		const category = await this.categoriesRepository.findCategoryByName(name);

		if (category) {
			throw new AppError('This category name is already registered');
		}

		const newCategory = await this.categoriesRepository.create(name);

		return newCategory;
	}
}

export default CreateCategory;
