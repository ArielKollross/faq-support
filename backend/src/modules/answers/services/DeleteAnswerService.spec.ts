import FakeAnswerRepository from '@modules/answers/repositories/fakes/FakeAnswerRepository';
import FakeCategoryRepository from '@modules/answers/repositories/fakes/FakeCategoryRepository';

import AppError from '@shared/errors/AppError';
import DeleteAnswerService from './DeleteAnswerService';

let fakeAnswerRepository: FakeAnswerRepository;
let fakeCategoryRepository: FakeCategoryRepository;
let deleteAnswer: DeleteAnswerService;

describe('CreateAnswer', () => {
	beforeEach(() => {
		fakeAnswerRepository = new FakeAnswerRepository();
		fakeCategoryRepository = new FakeCategoryRepository();

		deleteAnswer = new DeleteAnswerService(fakeAnswerRepository);
	});

	it('Should be able to delete answer', async () => {
		await fakeCategoryRepository.create('fake-category');

		const answer = await fakeAnswerRepository.create({
			title: 'How you doing?',
			category: 'category',
			reply: 'Fine!',
		});

		await deleteAnswer.execute(answer.id);

		const results = await fakeAnswerRepository.findAnswerById(answer.id);

		expect(results).toBeUndefined();
	});

	it('Should not be able to create non exist answer', async () => {
		await expect(
			deleteAnswer.execute('non-exist-answer-id'),
		).rejects.toBeInstanceOf(AppError);
	});
});
