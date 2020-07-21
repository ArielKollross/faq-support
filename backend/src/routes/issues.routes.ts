import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateIssuesService from '../service/CreateIssueService';

import Issue from '../models/Issue';

const issuesRouter = Router();

issuesRouter.get('/', async (request, response) => {
  const issueRepository = getRepository(Issue);

  const issues = await issueRepository.find();

	return response.json(issues);
});

issuesRouter.post('/', async (request, response) => {
		const {
			client_name,
			login_code,
			client_email,
			question,
		} = request.body;

	const createIssue = new CreateIssuesService();

		const issue = await createIssue.execute({
			client_name,
			login_code,
			client_email,
			question,
		});

		return response.json(issue);
});

export default issuesRouter;
