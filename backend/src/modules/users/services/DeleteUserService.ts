import IUserRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/errors/AppError';

class CreateUser {
	constructor(private userRepository: IUserRepository) {}

	public async execute(id: string): Promise<void> {
		const user = await this.userRepository.findById(id);

		if (!user) {
			throw new AppError(`I can't delete a user that doesn't exist!`);
		}

		await this.userRepository.delete(id);
	}
}

export default CreateUser;
