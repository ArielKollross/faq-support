import IAnswerRepository from '@modules/answers/repositories/IAnswerRepository';
import AppError from '@shared/errors/AppError';

class DeleteIssues {
	constructor(private answerRepository: IAnswerRepository) {}

	public async execute(id: string): Promise<void> {
		const answer = await this.answerRepository.findAnswerById(id);

		if (!answer) {
			throw new AppError('Error to delete answer');
		}

		await this.answerRepository.delete(id);
	}
}

export default DeleteIssues;
