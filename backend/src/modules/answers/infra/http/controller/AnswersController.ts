import { Request, Response } from 'express';

import AnswerRepository from '@modules/answers/infra/typeorm/repositories/AnswerRepository';
import CategoryRepository from '@modules/answers/infra/typeorm/repositories/CategoryRepository';
import CreateAnswerService from '@modules/answers/services/CreateAnswerService';

export default class AnswersController {
	public async index(request: Request, response: Response): Promise<Response> {
		const answerRepository = new AnswerRepository();

		const answers = await answerRepository.find();

		return response.json(answers);
	}

	public async create(request: Request, response: Response): Promise<Response> {
		const { reply, category, title } = request.body;

		const answerRepository = new AnswerRepository();
		const categoryRepository = new CategoryRepository();

		const createAnswer = new CreateAnswerService(
			answerRepository,
			categoryRepository,
		);

		const answer = await createAnswer.execute({ title, reply, category });

		return response.json(answer);
	}
}
