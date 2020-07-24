import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AddTitleToAnswer1595565128919 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await	queryRunner.addColumn('answers', new TableColumn({
				name: 'title',
				type: 'varchar',
				isNullable: true,
			}));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
				await queryRunner.dropColumn('answers', 'title');
    }

}
