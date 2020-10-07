import IAnswerRepository from '@modules/answers/repositories/IAnswerRepository';

import AppError from '@shared/errors/AppError';

class HelpfulAnswer {
	constructor(private answerRepository: IAnswerRepository) {}

	public async execute(id: string): Promise<void> {
		const answer = await this.answerRepository.findAnswerById(id);

		if (!answer) {
			throw new AppError('Error to increment helpful answer');
		}

		await this.answerRepository.incrementHelpfulAnswer(id);
	}
}

export default HelpfulAnswer;
