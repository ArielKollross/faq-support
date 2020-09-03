import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';

interface Request {
	name: string;
	email: string;
	password: string;
}

class CreateUser {
	public async execute({ name, email, password }: Request): Promise<User> {
		const userRepository = getRepository(User);

		const findExistUser = await userRepository.findOne({ email });

		if (findExistUser) {
			throw new AppError('Email is already register');
		}

		const hashedPassword = await hash(password, 8);

		const newUser = userRepository.create({
			name,
			email,
			password: hashedPassword,
		});

		await userRepository.save(newUser);

		return newUser;
	}
}

export default CreateUser;
