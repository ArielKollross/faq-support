import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateAnswerService from '../service/CreateAnswerService';

import ensureAuthenticated from '../middleware/ensureAuthenticated';

import Answer from '../models/Answer';

const answersRouter = Router();

answersRouter.get('/', async (request, response) => {
	const answersRepository = getRepository(Answer);

	const answers = await answersRepository.find();

	return response.json(answers);
});

answersRouter.post('/', ensureAuthenticated, async (request, response) => {
	const {reply, category} = request.body;

	const createAnswer = new CreateAnswerService();

	const answer =  await createAnswer.execute({reply, category});

	return response.json(answer);
});

export default answersRouter;
