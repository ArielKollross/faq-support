import Issues from '@modules/issues/infra/typeorm/entities/Issue';

interface ICreateIssueDTO {
	client_name: string;
	login_code: string;
	client_email: string;
	question: string;
}

export default interface IIssuesRepository {
	create(data: ICreateIssueDTO): Promise<Issues>;
	find(): Promise<Issues[]>;
	findById(id: string): Promise<Issues | undefined>;
	delete(id: string): Promise<void>;
}
