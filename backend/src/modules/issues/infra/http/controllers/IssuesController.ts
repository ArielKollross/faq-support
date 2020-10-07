import { Request, Response } from 'express';

import IssuesRepository from '@modules/issues/infra/typeorm/repositories/IssuesRepository';

import ListIssuesService from '@modules/issues/services/ListIssuesService';
import CreateIssuesService from '@modules/issues/services/CreateIssueService';
import DeleteIssueService from '@modules/issues/services/DeleteIssueService';

export default class IssuesController {
	public async index(request: Request, response: Response): Promise<Response> {
		const { offset, limit } = request.query;

		const issuesRepository = new IssuesRepository();
		const listIssues = new ListIssuesService(issuesRepository);

		const issues = await listIssues.execute({ offset, limit });

		return response.json(issues);
	}

	public async create(request: Request, response: Response): Promise<Response> {
		const { client_name, login_code, client_email, question } = request.body;

		const issuesRepository = new IssuesRepository();

		const createIssue = new CreateIssuesService(issuesRepository);

		const issue = await createIssue.execute({
			client_name,
			login_code,
			client_email,
			question,
		});
		return response.json(issue);
	}

	public async delete(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;

		const issuesRepository = new IssuesRepository();
		const deleteIssue = new DeleteIssueService(issuesRepository);

		await deleteIssue.execute(id);

		return response.status(200).send();
	}
}
