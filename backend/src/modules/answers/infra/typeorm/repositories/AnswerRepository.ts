import { Repository, getRepository } from 'typeorm';

import IAnswerRepository from '@modules/answers/repositories/IAnswerRepository';
import Answer from '@modules/answers/infra/typeorm/entities/Answer';

interface IRequest {
	title: string;
	reply: string;
	category_id?: string;
}

class AnswerRepository implements IAnswerRepository {
	private ormRepository: Repository<Answer>;

	constructor() {
		this.ormRepository = getRepository(Answer);
	}

	public async find(): Promise<Answer[]> {
		const answers = await this.ormRepository.find();

		return answers;
	}

	public async findAnswerById(id: string): Promise<Answer | undefined> {
		const answer = await this.ormRepository.findOne(id);

		return answer;
	}

	public async findAnswerByTitle(title: string): Promise<Answer | undefined> {
		const findTitle = await this.ormRepository.findOne({
			where: { title },
		});

		return findTitle;
	}

	public async findAnswerByReply(reply: string): Promise<Answer | undefined> {
		const findExistReply = await this.ormRepository.findOne({
			where: { reply },
		});

		return findExistReply;
	}

	public async create({
		title,
		reply,
		category_id,
	}: IRequest): Promise<Answer> {
		const answer = this.ormRepository.create({ title, reply, category_id });

		await this.ormRepository.save(answer);

		return answer;
	}

	public async delete(id: string): Promise<void> {
		await this.ormRepository.delete(id);
	}

	public async incrementHelpfulAnswer(id: string): Promise<void> {
		const answer = await this.ormRepository.findOne(id);

		if (answer) {
			const count = answer.helpful;

			answer.helpful = count + 1;

			await this.ormRepository.save(answer);
		}
	}

	public async incrementUnhelpfulAnswer(id: string): Promise<void> {
		const answer = await this.ormRepository.findOne(id);

		if (answer) {
			const count = answer.unhelpful;

			answer.unhelpful = count + 1;

			await this.ormRepository.save(answer);
		}
	}
}

export default AnswerRepository;
