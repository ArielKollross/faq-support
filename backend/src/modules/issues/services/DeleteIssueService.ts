import IIssueRepository from '@modules/issues/repositories/IIssuesRepository';
// import AppError from '@shared/errors/AppError';

class DeleteIssueService {
	constructor(private issuesRepository: IIssueRepository) {}

	public async execute(id: string): Promise<void> {
		// const issue = await this.issuesRepository.findById(id);

		// if (!issue) {
		// 	throw new AppError('Issue not found! Error to delete');
		// }

		await this.issuesRepository.deleteIssue(id);
	}
}

export default DeleteIssueService;
