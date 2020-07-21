import { getRepository } from 'typeorm';

import Category from '../models/Category';

import AppError from '../errors/AppError';

class CreateCategory {
	public async execute(name: string): Promise<Category>{

		const categoriesRepository = getRepository(Category);

		const findExistCategory = await categoriesRepository.findOne({name});

		if (findExistCategory) {
			throw  new AppError ('This category is already booked');
		}

		const newCategory = categoriesRepository.create({name});

		await categoriesRepository.save(newCategory);

		return newCategory;
	}
}

export default CreateCategory;
