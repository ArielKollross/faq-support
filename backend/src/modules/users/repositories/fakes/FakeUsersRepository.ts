import { uuid } from 'uuidv4';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
	name: string;
	email: string;
	password: string;
}

class CreateUser implements IUsersRepository {
	private users: User[] = [];

	public async find(): Promise<User[]> {
		const users = this.users.filter(element => element);

		return users;
	}

	public async findById(id: string): Promise<User | undefined> {
		const user = this.users.find(element => element.id === id);

		return user;
	}

	public async findUserByEmail(email: string): Promise<User | undefined> {
		const user = this.users.find(element => element.email === email);

		return user;
	}

	public async create(dataUser: IRequest): Promise<User> {
		const user = new User();

		Object.assign(user, { id: uuid() }, dataUser);

		this.users.push(user);

		return user;
	}

	public async delete(id: string): Promise<void> {
		const findIndex = this.users.findIndex(el => el.id === id);

		this.users.splice(findIndex, 1);
	}
}

export default CreateUser;
