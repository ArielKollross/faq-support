import Issue from '@modules/issues/infra/typeorm/entities/Issue';
import IIssueRepository from '@modules/issues/repositories/IIssuesRepository';

interface IRequestPagination {
	offset: number;
	limit: number;
}

class ListIssuesService {
	constructor(private issuesRepository: IIssueRepository) {}

	public async execute({
		offset,
		limit,
	}: IRequestPagination): Promise<Issue[]> {
		const issues = await this.issuesRepository.find({
			offset: parseInt(offset) || 0,
			limit: parseInt(limit) || 10,
		});

		return issues;
	}
}

export default ListIssuesService;
