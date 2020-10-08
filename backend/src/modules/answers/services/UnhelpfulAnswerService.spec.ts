import FakeAnswerRepository from '@modules/answers/repositories/fakes/FakeAnswerRepository';
import FakeCategoryRepository from '@modules/answers/repositories/fakes/FakeCategoryRepository';
import AppError from '@shared/errors/AppError';

import UnhelpfulAnswerService from './UnhelpfulAnswerService';

let fakeAnswerRepository: FakeAnswerRepository;
let fakeCategoryRepository: FakeCategoryRepository;
let unhelpfulAnswer: UnhelpfulAnswerService;

describe('UnhelpfulAnswer', () => {
	beforeEach(() => {
		fakeAnswerRepository = new FakeAnswerRepository();
		fakeCategoryRepository = new FakeCategoryRepository();

		unhelpfulAnswer = new UnhelpfulAnswerService(fakeAnswerRepository);
	});

	it('Should be able to increment helpful answer', async () => {
		await fakeCategoryRepository.create('category');

		const answer = await fakeAnswerRepository.create({
			title: 'Han shot first?',
			category: 'category',
			reply: 'Off course!',
		});

		await unhelpfulAnswer.execute(answer.id);
		await unhelpfulAnswer.execute(answer.id);

		expect(answer.unhelpful).toBe(2);
	});

	it('Should not be able to increment a non exist answer', async () => {
		await expect(
			unhelpfulAnswer.execute('non-exist-answer-id'),
		).rejects.toBeInstanceOf(AppError);
	});
});
