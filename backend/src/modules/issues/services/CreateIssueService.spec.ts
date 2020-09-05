import FakeIssuesRepository from '@modules/issues/repositories/fakes/FakeIssuesRepository';
import CreateIssueService from './CreateIssueService';

let createIssue: CreateIssueService;
let fakeIssuesRepository: FakeIssuesRepository;

describe('CreateIssue', () => {
	beforeEach(() => {
		fakeIssuesRepository = new FakeIssuesRepository();
		createIssue = new CreateIssueService();

		it('should be able to create a new issues', async () => {});
	});
});
