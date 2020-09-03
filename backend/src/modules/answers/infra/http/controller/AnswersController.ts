import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import CreateAnswerService from '@modules/answers/services/CreateAnswerService';

import Answer from '@modules/answers/infra/typeorm/entities/Answer';

export default class AnswersController {
	public async index(request: Request, response: Response): Promise<Response> {
		const answersRepository = getRepository(Answer);

		const answers = await answersRepository.find();

		return response.json(answers);
	}

	public async create(request: Request, response: Response): Promise<Response> {
		const { reply, category, title } = request.body;

		const createAnswer = new CreateAnswerService();

		const answer = await createAnswer.execute({ title, reply, category });

		return response.json(answer);
	}
}
