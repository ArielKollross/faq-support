import { getRepository, Repository } from 'typeorm';

import IIssueRepository from '@modules/issues/repositories/IIssuesRepository';

import Issue from '@modules/issues/infra/typeorm/entities/Issue';

interface IRequest {
	client_name: string;
	login_code: string;
	client_email: string;
	question: string;
}

interface IRequestPagination {
	offset: number;
	limit: number;
}

interface IPagination {
	page: {
		page_index: number;
		page_size: number;
		page_count: number;
		total_item: number;
	};
	data: Issue[];
}

class IssuesRepository implements IIssueRepository {
	private ormRepository: Repository<Issue>;

	constructor() {
		this.ormRepository = getRepository(Issue);
	}

	public async find({
		offset,
		limit,
	}: IRequestPagination): Promise<IPagination> {
		const issues = await this.ormRepository
			.createQueryBuilder('issues')
			.skip((offset - 1) * limit)
			.take(limit)
			.getMany();

		const count = await this.ormRepository.count();

		const totalInPage = issues.length;

		return {
			page: {
				page_index: offset,
				page_size: totalInPage,
				page_count: Math.ceil(count / limit),
				total_item: count,
			},
			data: issues,
		};
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

	public async delete(id: string): Promise<void> {
		await this.ormRepository.delete(id);
	}
}

export default IssuesRepository;
