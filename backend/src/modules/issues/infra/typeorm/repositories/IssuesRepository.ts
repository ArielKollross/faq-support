import { getRepository, Repository } from 'typeorm';

import IIssueRepository from '@modules/issues/repositories/IIssuesRepository';

import Issue from '@modules/issues/infra/typeorm/entities/Issue';

interface IRequest {
	client_name: string;
	login_code: string;
	client_email: string;
	question: string;
}

class IssuesRepository implements IIssueRepository {
	private ormRepository: Repository<Issue>;

	constructor() {
		this.ormRepository = getRepository(Issue);
	}

	public async findAllIssues(): Promise<Issue[]> {
		const issues = await this.ormRepository.find();

		return issues;
	}

	public async findById(id: string): Promise<Issue | undefined> {
		const issue = await this.ormRepository.findOne(id);

		return issue;
	}

	public async create({
		client_email,
		client_name,
		login_code,
		question,
	}: IRequest): Promise<Issue> {
		const issue = this.ormRepository.create({
			client_email,
			client_name,
			login_code,
			question,
		});

		await this.ormRepository.save(issue);

		return issue;
	}

	public async deleteIssue(id: string): Promise<void> {
		await this.ormRepository.delete(id);
	}
}

export default IssuesRepository;
