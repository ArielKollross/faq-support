import { Request, Response } from 'express';

import { getRepository } from 'typeorm';

import CreateIssuesService from '@modules/issues/services/CreateIssueService';

import Issue from '@modules/issues/infra/typeorm/entities/Issue';

export default class IssuesController {
	public async index(request: Request, response: Response): Promise<Response> {
		const issueRepository = getRepository(Issue);

		const issues = await issueRepository.find();

		return response.json(issues);
	}

	public async create(request: Request, response: Response): Promise<Response> {
		const { client_name, login_code, client_email, question } = request.body;

		const createIssue = new CreateIssuesService();

		const issue = await createIssue.execute({
			client_name,
			login_code,
			client_email,
			question,
		});

		return response.json(issue);
	}
}
