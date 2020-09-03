import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAnswers1595276644406 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: 'answers',
				columns: [
					{
						name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
					},
					{
						name: 'reply',
						type: 'varchar',
						isUnique: true,
					},
					{
						name: 'category_id',
						type: 'uuid',
						isNullable: true,
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
			}));

			await queryRunner.createForeignKey('answers', new TableForeignKey({
				name: 'AnswerCategory',
				columnNames: ['category_id'],
				referencedColumnNames: ['id'],
				referencedTableName: 'categories',
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
				}),
			);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropForeignKey('answers', 'AnswerCategory');

			await queryRunner.dropTable('answers');
    }

}
