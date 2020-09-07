import FakeIssuesRepository from '@modules/issues/repositories/fakes/FakeIssuesRepository';

import AppError from '@shared/errors/AppError';
import DeleteIssueService from './DeleteIssueService';

let fakeIssuesRepository: FakeIssuesRepository;
let deleteIssue: DeleteIssueService;

describe('DeleteIssue', () => {
	beforeEach(() => {
		fakeIssuesRepository = new FakeIssuesRepository();
		deleteIssue = new DeleteIssueService(fakeIssuesRepository);
	});

	it('should be able to delete a issues', async () => {
		const issue = await fakeIssuesRepository.create({
			client_name: 'Iron Man',
			login_code: '1st',
			client_email: 'ironman@email.com',
			question: 'But if you put the hammer in an elevator?',
		});

		await deleteIssue.execute(issue.id);

		const results = await fakeIssuesRepository.findById(issue.id);

		expect(results).toBeUndefined();
	});

	it('should not be able to delete non existent issues', async () => {
		const id = 'non-existent-id';

		await expect(deleteIssue.execute(id)).rejects.toBeInstanceOf(AppError);
	});
});
