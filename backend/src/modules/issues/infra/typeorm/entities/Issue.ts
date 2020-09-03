import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('issues')
class Issue {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	client_name: string;

	@Column()
	login_code: string;

	@Column()
	client_email: string;

	@Column()
	question: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Issue;
