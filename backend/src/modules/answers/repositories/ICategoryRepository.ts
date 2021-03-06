import Category from '@modules/answers/infra/typeorm/entities/Category';

export default interface IAnswerRepository {
	create(name: string): Promise<Category>;
	find(): Promise<Category[]>;
	findCategoryByName(name: string): Promise<Category | undefined>;
}
