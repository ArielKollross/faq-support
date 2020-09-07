import FakeAnswerRepository from '@modules/answers/repositories/fakes/FakeAnswerRepository';
import FakeCategoryRepository from '@modules/answers/repositories/fakes/FakeCategoryRepository';

import AppError from '@shared/errors/AppError';
import CreateAnswerService from './CreateAnswerService';

let fakeAnswerRepository: FakeAnswerRepository;
let fakeCategoryRepository: FakeCategoryRepository;
let createAnswer: CreateAnswerService;

describe('CreateAnswer', () => {
	beforeEach(() => {
		fakeAnswerRepository = new FakeAnswerRepository();
		fakeCategoryRepository = new FakeCategoryRepository();

		createAnswer = new CreateAnswerService(
			fakeAnswerRepository,
			fakeCategoryRepository,
		);
	});

	it('Should be able to create new answer', async () => {
		const category = await fakeCategoryRepository.create('Friends');

		const answer = await createAnswer.execute({
			title: 'How you doing?',
			category: 'Friends',
			reply: 'Fine!',
		});

		expect(answer).toHaveProperty('id');
		expect(answer.title).toBe('How you doing?');
		expect(answer.reply).toBe('Fine!');
		expect(answer.category_id).toBe(category.id);
	});

	it('Should not be able to create new answer without category', async () => {
		await expect(
			createAnswer.execute({
				title: 'How you doing?',
				category: 'Friends',
				reply: 'Fine!',
			}),
		).rejects.toBeInstanceOf(AppError);
	});

	it('Should not be able to create answer with same title or reply', async () => {
		await fakeCategoryRepository.create('Friends');

		await createAnswer.execute({
			title: 'How you doing?',
			category: 'Friends',
			reply: 'Fine!',
		});

		await expect(
			createAnswer.execute({
				title: 'How you doing?',
				category: 'Friends',
				reply: 'Fine!',
			}),
		).rejects.toBeInstanceOf(AppError);
	});
});
