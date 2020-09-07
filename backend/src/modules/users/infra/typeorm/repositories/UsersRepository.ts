import { getRepository, Repository } from 'typeorm';

import IUserRepository from '@modules/users/repositories/IUsersRepository';

import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
	name: string;
	email: string;
	password: string;
}

class UsersRepository implements IUserRepository {
	private ormRepository: Repository<User>;

	constructor() {
		this.ormRepository = getRepository(User);
	}

	public async find(): Promise<User[]> {
		const users = await this.ormRepository.find();

		return users;
	}

	public async findById(id: string): Promise<User | undefined> {
		const user = await this.ormRepository.findOne(id);

		return user;
	}

	public async findUserByEmail(email: string): Promise<User | undefined> {
		const user = await this.ormRepository.findOne({
			where: { email },
		});

		return user;
	}

	public async create(userData: IRequest): Promise<User> {
		const user = this.ormRepository.create(userData);

		await this.ormRepository.save(user);

		return user;
	}

	public async delete(id: string): Promise<void> {
		this.ormRepository.delete(id);
	}
}

export default UsersRepository;
