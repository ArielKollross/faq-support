import { uuid } from 'uuidv4';

import Issue from '@modules/issues/infra/typeorm/entities/Issue';
// import AppError from '@shared/errors/AppError';

interface Request {
	client_name: string;
	login_code: string;
	client_email: string;
	question: string;
}

class CreateIssueService {
	private issues: Issue[] = [];

	public async execute({
		client_name,
		login_code,
		client_email,
		question,
	}: Request): Promise<Issue> {
		const issue = new Issue();

		Object.assign(issue, {
			id: uuid(),
			client_name,
			client_email,
			login_code,
			question,
		});

		this.issues.push(issue);

		return issue;
	}
}

export default CreateIssueService;
