import Issue from '@modules/issues/infra/typeorm/entities/Issue';

interface ICreateIssueDTO {
	client_name: string;
	login_code: string;
	client_email: string;
	question: string;
}

interface IRequestPagination {
	offset: number;
	limit: number;
}

interface IPagination {
	page: {
		page_index: number;
		page_size: number;
		page_count: number;
		total_item: number;
	};
	data: Issue[];
}

export default interface IIssuesRepository {
	create(data: ICreateIssueDTO): Promise<Issue>;
	find(data: IRequestPagination): Promise<IPagination>;
	findById(id: string): Promise<Issue | undefined>;
	delete(id: string): Promise<void>;
}
