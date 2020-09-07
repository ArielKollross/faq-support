import FakeIssuesRepository from '@modules/issues/repositories/fakes/FakeIssuesRepository';
import AppError from '@shared/errors/AppError';
import CreateIssueService from './CreateIssueService';

let fakeIssuesRepository: FakeIssuesRepository;
let createIssue: CreateIssueService;

describe('CreateIssue', () => {
	beforeEach(() => {
		fakeIssuesRepository = new FakeIssuesRepository();

		createIssue = new CreateIssueService(fakeIssuesRepository);
	});

	it('should be able to create a new issues', async () => {
		const issue = await createIssue.execute({
			client_name: 'batman',
			login_code: '',
			client_email: 'batemail@batemail.com',
			question: 'why sky is blue?',
		});

		expect(issue).toHaveProperty('id');
		expect(issue.client_name).toBe('batman');
		expect(issue.client_email).toBe('batemail@batemail.com');
		expect(issue.question).toBe('why sky is blue?');
	});

	it('should not be able to create a new issues without name, email or question empty', async () => {
		await expect(
			createIssue.execute({
				client_name: '',
				login_code: '',
				client_email: 'batemail@batemail.com',
				question: 'why sky is blue?',
			}),
		).rejects.toBeInstanceOf(AppError);
	});
});
