import { Request, Response } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import CreateUserService from '@modules/users/services/CreateUserService';
import User from '@modules/users/infra/typeorm/entities/User';

export default class UsersController {
	public async index(request: Request, response: Response): Promise<Response> {
		const usersRepository = new UsersRepository();

		const users = await usersRepository.find();

		const removePasswordByUsers = users.map(({ password, ...rest }) => rest);

		return response.json(removePasswordByUsers);
	}

	public async create(request: Request, response: Response): Promise<Response> {
		const usersRepository = new UsersRepository();
		const createUser = new CreateUserService(usersRepository);

		const { name, email, password } = request.body;

		const user = await createUser.execute({ name, email, password });

		delete user.password;

		return response.json(user);
	}
}
