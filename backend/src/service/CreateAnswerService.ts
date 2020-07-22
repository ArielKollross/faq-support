import { getRepository } from 'typeorm';

import Answer from '../models/Answer';
import Category from '../models/Category';

import AppError from '../errors/AppError';

interface Request{
	reply: string;
	category?: string;
}

class CreateUser {
	public async execute({reply, category}: Request): Promise<Answer> {
		const answerRepository = getRepository(Answer);
		const categoryRepository = getRepository(Category);

		const findCategoryId = await categoryRepository.findOne({
			where: { name: category},
		});

		if (!findCategoryId){
			throw new AppError('Category not registered');
		}

		const newAnswer = answerRepository.create({
			reply,
			category_id: findCategoryId.id,
		});

		await answerRepository.save(newAnswer);

		return newAnswer;
	}
}

export default CreateUser;
