import { Request, Response } from 'express';

import AnswerRepository from '@modules/answers/infra/typeorm/repositories/AnswerRepository';

import UnhelpfulAnswerService from '@modules/answers/services/UnhelpfulAnswerService';

export default class UnhelpfulController {
	public async update(request: Request, response: Response): Promise<Response> {
		const { id } = request.body;

		const answerRepository = new AnswerRepository();
		const unhelpfulAnswer = new UnhelpfulAnswerService(answerRepository);

		await unhelpfulAnswer.execute(id);

		return response.json(200).send();
	}
}
