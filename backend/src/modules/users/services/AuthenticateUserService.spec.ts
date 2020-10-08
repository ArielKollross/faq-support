import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import AppError from '@shared/errors/AppError';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let authenticateUser: AuthenticateUserService;
let createUser: CreateUserService;

describe('CreateUser', () => {
	beforeEach(() => {
		fakeUsersRepository = new FakeUsersRepository();
		createUser = new CreateUserService(fakeUsersRepository);
		authenticateUser = new AuthenticateUserService(fakeUsersRepository);
	});

	it('Should be able to authenticate user', async () => {
		const user = await createUser.execute({
			name: 'Hermione Granger',
			email: 'hermione@email.com',
			password: '123456',
		});

		const response = await authenticateUser.execute({
			email: 'hermione@email.com',
			password: '123456',
		});

		expect(response).toHaveProperty('token');
		expect(response.user).toEqual(user);
	});

	it('Should be not able to login with incorrect email', async () => {
		await createUser.execute({
			name: 'Uchiha Madara',
			email: 'uchiha@konoha.com',
			password: 'sharingan',
		});

		await expect(
			authenticateUser.execute({
				email: 'uchiha@konoha.com.fw',
				password: 'sharingan',
			}),
		).rejects.toBeInstanceOf(AppError);
	});

	it('Should be not able to login with incorrect password', async () => {
		await createUser.execute({
			name: 'Uchiha Madara',
			email: 'uchiha@konoha.com',
			password: 'sharingan',
		});

		await expect(
			authenticateUser.execute({
				email: 'uchiha@konoha.com',
				password: 'wrong-password',
			}),
		).rejects.toBeInstanceOf(AppError);
	});
});
