import { Request, Response } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import CreateUserService from '@modules/users/services/CreateUserService';
import DeleteUserService from '@modules/users/services/DeleteUserService';

export default class UsersController {
	public async index(request: Request, response: Response): Promise<Response> {
		const usersRepository = new UsersRepository();

		const users = await usersRepository.find();

		// @ts-ignore
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

	public async delete(request: Request, response: Response): Promise<Response> {
		const usersRepository = new UsersRepository();
		const deleteUser = new DeleteUserService(usersRepository);

		const { id } = request.params;

		await deleteUser.execute(id);

		return response.status(200).send();
	}
}
