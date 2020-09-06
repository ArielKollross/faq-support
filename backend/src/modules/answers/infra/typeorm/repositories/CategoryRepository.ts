import { getRepository, Repository } from 'typeorm';

import ICategoryRepository from '@modules/answers/repositories/ICategoryRepository';
import Category from '@modules/answers/infra/typeorm/entities/Category';

class CreateCategory implements ICategoryRepository {
	private ormRepository: Repository<Category>;

	constructor() {
		this.ormRepository = getRepository(Category);
	}

	public async find(): Promise<Category[]> {
		const categories = await this.ormRepository.find();

		return categories;
	}

	public async findCategory(name: string): Promise<Category | undefined> {
		const category = await this.ormRepository.findOne({
			where: { name },
		});

		return category;
	}

	public async create(name: string): Promise<Category> {
		const category = this.ormRepository.create({ name });

		await this.ormRepository.save(category);

		return category;
	}
}

export default CreateCategory;
