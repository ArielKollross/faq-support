import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import AppError from '@shared/errors/AppError';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;

describe('CreateUser', () => {
	beforeEach(() => {
		fakeUsersRepository = new FakeUsersRepository();
		createUser = new CreateUserService(fakeUsersRepository);
	});

	it('Should be able to create a new user', async () => {
		const user = await createUser.execute({
			name: 'Spider Man',
			email: 'spider@email.com',
			password: 'goNet',
		});

		expect(user).toHaveProperty('id');
		expect(user.name).toBe('Spider Man');
		expect(user.email).toBe('spider@email.com');
	});

	it('Should not be able to create a new user with already used email', async () => {
		await createUser.execute({
			name: 'Spider Woman',
			email: 'spider_woman@email.com',
			password: 'goNet',
		});

		await expect(
			createUser.execute({
				name: 'Other Spider name',
				email: 'spider_woman@email.com',
				password: 'goNet',
			}),
		).rejects.toBeInstanceOf(AppError);
	});
});
