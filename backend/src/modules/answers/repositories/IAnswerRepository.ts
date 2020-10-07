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
	findAnswerById(id: string): Promise<Answer | undefined>;
	findAnswerByTitle(title: string): Promise<Answer | undefined>;
	findAnswerByReply(reply: string): Promise<Answer | undefined>;
	delete(id: string): Promise<void>;

	incrementHelpfulAnswer(id: string): Promise<void>;
	incrementUnhelpfulAnswer(id: string): Promise<void>;
}
