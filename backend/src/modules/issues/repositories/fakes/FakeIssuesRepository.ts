import { uuid } from 'uuidv4';

import IIssueRepository from '@modules/issues/repositories/IIssuesRepository';

import Issue from '@modules/issues/infra/typeorm/entities/Issue';

interface IRequest {
	client_name: string;
	login_code: string;
	client_email: string;
	question: string;
}

class FakeIssuesRepository implements IIssueRepository {
	private issues: Issue[] = [];

	public async find(): Promise<Issue[]> {
		const issues = this.issues.filter(issue => issue);

		return issues;
	}

	public async findById(id: string): Promise<Issue | undefined> {
		const issue = this.issues.find(element => element.id === id);

		return issue;
	}

	public async create(issueData: IRequest): Promise<Issue> {
		const issue = new Issue();

		Object.assign(issue, { id: uuid() }, issueData);

		this.issues.push(issue);

		return issue;
	}

	public async delete(id: string): Promise<void> {
		const findIndex = this.issues.findIndex(element => element.id === id);

		this.issues.splice(findIndex, 1);
	}
}

export default FakeIssuesRepository;
