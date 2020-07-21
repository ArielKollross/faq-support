import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, JoinColumn, UpdateDateColumn } from 'typeorm';

import Category from './Category';

@Entity('answers')
class Issue {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	reply: string;

	@OneToMany(() => Category, category => category.answers, {eager: true})
	@JoinColumn({ name: 'category_id'})
	category: Category;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Issue;
