import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateUserService from '../service/CreateUserService';
import User from '../models/User';

const userRouter = Router();

userRouter.get('/', async (request, response) => {
	const usersRepository = getRepository(User);

	const users = await usersRepository.find();

	const filteredUsers = users.map(({password, ...rest}) => rest);

	return response.json(filteredUsers);
});

userRouter.post('/', async (request, response) => {
	const createUser = new CreateUserService();

	const {name, email, password} = request.body;

	const user = await createUser.execute({name, email, password});

	delete user.password;

	return response.json(user);
});

export default userRouter;
