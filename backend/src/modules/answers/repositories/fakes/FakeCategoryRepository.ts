import { uuid } from 'uuidv4';

import ICategoryRepository from '@modules/answers/repositories/ICategoryRepository';
import Category from '@modules/answers/infra/typeorm/entities/Category';

class CreateCategory implements ICategoryRepository {
	private categories: Category[] = [];

	public async find(): Promise<Category[]> {
		const categories = this.categories.filter(element => element);

		return categories;
	}

	public async findCategoryByName(name: string): Promise<Category | undefined> {
		const category = this.categories.find(element => element.name === name);

		return category;
	}

	public async create(name: string): Promise<Category> {
		const category = new Category();

		Object.assign(category, { id: uuid(), name });

		this.categories.push(category);

		return category;
	}
}

export default CreateCategory;
