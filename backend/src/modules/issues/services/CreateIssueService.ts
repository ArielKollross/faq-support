import Issue from '@modules/issues/infra/typeorm/entities/Issue';
import IIssueRepository from '@modules/issues/repositories/IIssuesRepository';
// import AppError from '@shared/errors/AppError';

interface IRequest {
	client_name: string;
	login_code: string;
	client_email: string;
	question: string;
}

class CreateIssueService {
	constructor(private issuesRepository: IIssueRepository) {}

	public async execute(issueData: IRequest): Promise<Issue> {
		const issue = await this.issuesRepository.create(issueData);

		return issue;
	}
}

export default CreateIssueService;
