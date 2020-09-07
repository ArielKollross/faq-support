import IAnswerRepository from '@modules/answers/repositories/IAnswerRepository';
import ICategoryRepository from '@modules/answers/repositories/ICategoryRepository';

import Answer from '@modules/answers/infra/typeorm/entities/Answer';

import AppError from '@shared/errors/AppError';

interface IRequest {
	title: string;
	reply: string;
	category: string;
	category_id?: string;
}

class CreateUser {
	constructor(
		private answerRepository: IAnswerRepository,
		private categoryRepository: ICategoryRepository,
	) {}

	public async execute({ title, reply, category }: IRequest): Promise<Answer> {
		const findCategory = await this.categoryRepository.findCategoryByName(
			category,
		);

		if (!findCategory) {
			throw new AppError('Category is not register or empty');
		}

		const findExistTitle = await this.answerRepository.findAnswerByTitle(title);

		const findExistReply = await this.answerRepository.findAnswerByReply(reply);

		if (findExistTitle || findExistReply) {
			throw new AppError('Title or answer is already registered');
		}

		const answer = await this.answerRepository.create({
			title,
			reply,
			category_id: findCategory.id,
		});

		return answer;
	}
}

export default CreateUser;
