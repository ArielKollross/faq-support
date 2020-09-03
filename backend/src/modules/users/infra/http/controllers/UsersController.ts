import { Request, Response } from 'express';

import { getRepository } from 'typeorm';

import CreateUserService from '@modules/users/services/CreateUserService';
import User from '@modules/users/infra/typeorm/entities/User';

export default class UsersController {
	public async index(request: Request, response: Response): Promise<Response> {
		const usersRepository = getRepository(User);

		const users = await usersRepository.find();

		const filteredUsers = users.map(({ password, ...rest }) => rest);

		return response.json(filteredUsers);
	}

	public async create(request: Request, response: Response): Promise<Response> {
		const createUser = new CreateUserService();

		const { name, email, password } = request.body;

		const user = await createUser.execute({ name, email, password });

		delete user.password;

		return response.json(user);
	}
}
