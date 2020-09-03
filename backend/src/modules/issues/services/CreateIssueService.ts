import { getRepository } from 'typeorm';

import Issue from '@modules/issues/infra/typeorm/entities/Issue';
// import AppError from '@shared/errors/AppError';

interface Request {
	client_name: string;
	login_code: string;
	client_email: string;
	question: string;
}

class CreateIssueService {
	public async execute({
		client_name,
		login_code,
		client_email,
		question,
	}: Request): Promise<Issue> {
		const issueRepository = getRepository(Issue);

		// const checkIfQuestionExist = await issueRepository.findOne({
		// 	where: {
		// 		question,
		// 	}
		// });

		// if (checkIfQuestionExist) {
		// 	throw new AppError('Duplicate question!');
		// }

		const issue = issueRepository.create({
			client_name,
			login_code,
			client_email,
			question,
		});

		await issueRepository.save(issue);

		return issue;
	}
}

export default CreateIssueService;
