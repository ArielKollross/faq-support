import FakeCategoryRepository from '@modules/answers/repositories/fakes/FakeCategoryRepository';

import AppError from '@shared/errors/AppError';
import CreateCategoryService from './CreateCategoryService';

let fakeCategoryRepository: FakeCategoryRepository;
let createCategory: CreateCategoryService;

describe('CreateCategory', () => {
	beforeEach(() => {
		fakeCategoryRepository = new FakeCategoryRepository();
		createCategory = new CreateCategoryService(fakeCategoryRepository);
	});

	it('Should be able to create new category', async () => {
		const category = await createCategory.execute('Enchanted Weapons');

		expect(category).toHaveProperty('id');
		expect(category.name).toBe('Enchanted Weapons');
	});

	it('Should not be able to create new category this name is booked', async () => {
		await createCategory.execute('category');

		await expect(createCategory.execute('category')).rejects.toBeInstanceOf(
			AppError,
		);
	});
});
