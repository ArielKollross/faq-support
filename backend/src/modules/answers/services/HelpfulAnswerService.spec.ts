import FakeAnswerRepository from '@modules/answers/repositories/fakes/FakeAnswerRepository';
import FakeCategoryRepository from '@modules/answers/repositories/fakes/FakeCategoryRepository';
import AppError from '@shared/errors/AppError';

import HelpfulAnswerService from './HelpfulAnswerService';

let fakeAnswerRepository: FakeAnswerRepository;
let fakeCategoryRepository: FakeCategoryRepository;
let helpfulAnswer: HelpfulAnswerService;

describe('HelpfulAnswer', () => {
	beforeEach(() => {
		fakeAnswerRepository = new FakeAnswerRepository();
		fakeCategoryRepository = new FakeCategoryRepository();

		helpfulAnswer = new HelpfulAnswerService(fakeAnswerRepository);
	});

	it('Should be able to increment helpful answer', async () => {
		await fakeCategoryRepository.create('category');

		const answer = await fakeAnswerRepository.create({
			title: 'Han shot first?',
			category: 'category',
			reply: 'Off course!',
		});

		await helpfulAnswer.execute(answer.id);
		await helpfulAnswer.execute(answer.id);

		expect(answer.helpful).toBe(2);
	});

	it('Should not be able to increment a non exist answer', async () => {
		await expect(
			helpfulAnswer.execute('non-exist-answer-id'),
		).rejects.toBeInstanceOf(AppError);
	});
});
