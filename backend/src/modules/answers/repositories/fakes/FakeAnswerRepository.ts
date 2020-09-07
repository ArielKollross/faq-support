import { uuid } from 'uuidv4';

import IAnswerRepository from '@modules/answers/repositories/IAnswerRepository';
import Answer from '@modules/answers/infra/typeorm/entities/Answer';

interface IRequest {
	title: string;
	reply: string;
	category?: string;
	category_id?: string;
}

class AnswerRepository implements IAnswerRepository {
	private answers: Answer[] = [];

	public async find(): Promise<Answer[]> {
		const answers = this.answers.filter(element => element);

		return answers;
	}

	public async findAnswerById(id: string): Promise<Answer | undefined> {
		const answer = this.answers.find(element => element.id === id);

		return answer;
	}

	public async findAnswerByTitle(title: string): Promise<Answer | undefined> {
		const answer = this.answers.find(element => element.title === title);

		return answer;
	}

	public async findAnswerByReply(reply: string): Promise<Answer | undefined> {
		const answer = this.answers.find(element => element.reply === reply);

		return answer;
	}

	public async create(answerData: IRequest): Promise<Answer> {
		const answer = new Answer();

		Object.assign(answer, { id: uuid() }, answerData);

		this.answers.push(answer);

		return answer;
	}

	public async delete(id: string): Promise<void> {
		const findIndex = this.answers.findIndex(answer => answer.id === id);

		this.answers.splice(findIndex, 1);
	}
}

export default AnswerRepository;
