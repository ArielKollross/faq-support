import { Router } from 'express';

import CreateIssuesService from '../service/CreateIssueService';

const issuesRouter = Router();

issuesRouter.get('/', async (request, response) => {
	return response.json({msg: "ok!"});
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
