import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import AppError from '@shared/errors/AppError';
import DeleteUserService from './DeleteUserService';

let fakeUsersRepository: FakeUsersRepository;
let deleteUser: DeleteUserService;

describe('DeleteUser', () => {
	beforeEach(() => {
		fakeUsersRepository = new FakeUsersRepository();
		deleteUser = new DeleteUserService(fakeUsersRepository);
	});

	it('should be able to delete user', async () => {
		const user = await fakeUsersRepository.create({
			name: 'Joker',
			email: 'jokes@emial.com',
			password: '123456',
		});

		await deleteUser.execute(user.id);

		const results = await fakeUsersRepository.findById(user.id);

		expect(results).toBeUndefined();
	});

	it('Should not be able to delete non existent user', async () => {
		await expect(
			deleteUser.execute('non-existent-id-user'),
		).rejects.toBeInstanceOf(AppError);
	});
});
