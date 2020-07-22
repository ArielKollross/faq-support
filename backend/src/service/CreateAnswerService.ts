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

		const findExactAnswer = await answerRepository.findOne({
			 where: { reply },
		});

		if (!findCategoryId){
			throw new AppError('Category not registered');
		}

		if (findExactAnswer) {
			throw new AppError('This answer is already exist');
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
