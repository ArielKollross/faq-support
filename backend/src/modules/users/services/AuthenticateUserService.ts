import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';

import IUserRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
	email: string;
	password: string;
}

interface IResponse {
	user: User;
	token: string;
}

class AuthenticateUserService {
	constructor(private userRepository: IUserRepository) {}

	public async execute({ email, password }: IRequest): Promise<IResponse> {
		const user = await this.userRepository.findUserByEmail(email);

		if (!user) {
			throw new AppError('invalid login credentials', 401);
		}

		const passwordCompare = await compare(password, user.password);

		if (!passwordCompare) {
			throw new AppError('invalid login credentials', 401);
		}

		const { secret, expiresIn } = authConfig.jwt;

		const token = sign({}, secret, {
			subject: user.id,
			expiresIn,
		});

		return {
			user,
			token,
		};
	}
}

export default AuthenticateUserService;
