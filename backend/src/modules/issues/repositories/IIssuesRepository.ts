// quais metodos e retornos o meu repository terá

import Issues from '@modules/issues/infra/typeorm/entities/Issue';

interface ICreateIssueDTO {
	client_name: string;
	login_code: string;
	client_email: string;
	question: string;
}

export default interface IIssuesRepository {
	create(data: ICreateIssueDTO): Promise<Issues>;
	findById(id: string): Promise<Issues | undefined>;
	findAllIssues(): Promise<Issues[]>;
	deleteIssue(id: string): Promise<void>;
}
