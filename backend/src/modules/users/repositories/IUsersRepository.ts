import User from '@modules/users/infra/typeorm/entities/User';

interface IUserDTO {
	name: string;
	email: string;
	password: string;
}

export default interface IUsersRepository {
	create(data: IUserDTO): Promise<User>;
	find(): Promise<User[]>;
	findUserByEmail(email: string): Promise<User | undefined>;
	delete(id: string): Promise<void>;
}
