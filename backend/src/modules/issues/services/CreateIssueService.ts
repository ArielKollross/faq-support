import Issue from '@modules/issues/infra/typeorm/entities/Issue';
import IIssueRepository from '@modules/issues/repositories/IIssuesRepository';

import AppError from '@shared/errors/AppError';

interface IRequest {
	client_name: string;
	login_code: string;
	client_email: string;
	question: string;
}

class CreateIssueService {
	constructor(private issuesRepository: IIssueRepository) {}

	public async execute({
		client_name,
		client_email,
		login_code,
		question,
	}: IRequest): Promise<Issue> {
		if (!client_name || !client_email || !question) {
			throw new AppError('Client, name, email and question is mandatory');
		}

		const issue = await this.issuesRepository.create({
			client_name,
			client_email,
			login_code,
			question,
		});

		return issue;
	}
}

export default CreateIssueService;
