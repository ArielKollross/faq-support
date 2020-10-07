import { Request, Response } from 'express';

import AnswerRepository from '@modules/answers/infra/typeorm/repositories/AnswerRepository';

import HelpfulAnswerService from '@modules/answers/services/HelpfulAnswerService';

export default class HelpfulController {
	public async update(request: Request, response: Response): Promise<Response> {
		const { id } = request.body;

		const answerRepository = new AnswerRepository();
		const helpfulAnswer = new HelpfulAnswerService(answerRepository);

		await helpfulAnswer.execute(id);

		return response.json(200).send();
	}
}
