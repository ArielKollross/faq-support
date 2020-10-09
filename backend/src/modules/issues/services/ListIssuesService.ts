import Issue from '@modules/issues/infra/typeorm/entities/Issue';
import IIssueRepository from '@modules/issues/repositories/IIssuesRepository';
import AppError from '@shared/errors/AppError';

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
		if (parseInt(offset) < 0 || parseInt(limit) < 0) {
			throw new AppError('Invalid query params pagination');
		}

		const issues = await this.issuesRepository.find({
			offset: parseInt(offset) || 1,
			limit: parseInt(limit) || 10,
		});

		return issues;
	}
}

export default ListIssuesService;
