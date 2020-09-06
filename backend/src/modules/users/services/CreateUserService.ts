import { hash } from 'bcryptjs';

import IUserRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
	name: string;
	email: string;
	password: string;
}

class CreateUser {
	constructor(private userRepository: IUserRepository) {}

	public async execute({ name, email, password }: IRequest): Promise<User> {
		const findUser = await this.userRepository.findUserByEmail(email);

		if (findUser) {
			throw new AppError('This email is already register');
		}

		const hashedPassword = await hash(password, 8);

		const user = this.userRepository.create({
			name,
			email,
			password: hashedPassword,
		});
		return user;
	}
}

export default CreateUser;
