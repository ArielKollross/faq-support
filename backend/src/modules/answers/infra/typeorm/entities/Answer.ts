import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	ManyToOne,
	JoinColumn,
	UpdateDateColumn,
} from 'typeorm';

import Category from './Category';

@Entity('answers')
class Answer {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	title: string;

	@Column()
	reply: string;

	@ManyToOne(() => Category, category => category.answers, { eager: true })
	@JoinColumn({ name: 'category_id' })
	category: Category;

	@Column()
	category_id: string;

	@Column('int')
	helpful: number;

	@Column('int')
	unhelpful: number;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Answer;
