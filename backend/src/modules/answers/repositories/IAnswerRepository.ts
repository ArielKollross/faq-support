import Answer from '@modules/answers/infra/typeorm/entities/Answer';

interface IAnswerDTO {
	title: string;
	reply: string;
	category?: string;
	category_id?: string;
}

export default interface IAnswerRepository {
	create(data: IAnswerDTO): Promise<Answer>;
	find(): Promise<Answer[]>;
	findExistTitle(title: string): Promise<Answer | undefined>;
	findExistReply(reply: string): Promise<Answer | undefined>;
}
