import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrated1722342326556 implements MigrationInterface {
	name = 'Migrated1722342326556';

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "settings" DROP COLUMN "list_description_limit"`,
		);
		await queryRunner.query(
			`ALTER TABLE "settings" ADD "list_description_limit" text`,
		);
		await queryRunner.query(
			`ALTER TABLE "settings" ALTER COLUMN "default_items_per_page" SET NOT NULL`,
		);
		await queryRunner.query(
			`ALTER TABLE "settings" ALTER COLUMN "default_items_per_page" SET DEFAULT '10'`,
		);
		await queryRunner.query(
			`ALTER TABLE "settings" ALTER COLUMN "default_items_per_page_admin" SET NOT NULL`,
		);
		await queryRunner.query(
			`ALTER TABLE "settings" ALTER COLUMN "default_items_per_page_admin" SET DEFAULT '10'`,
		);
		await queryRunner.query(
			`ALTER TABLE "settings" ALTER COLUMN "max_login_attempts" SET DEFAULT '5'`,
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE "settings" ALTER COLUMN "max_login_attempts" DROP DEFAULT`,
		);
		await queryRunner.query(
			`ALTER TABLE "settings" ALTER COLUMN "default_items_per_page_admin" DROP DEFAULT`,
		);
		await queryRunner.query(
			`ALTER TABLE "settings" ALTER COLUMN "default_items_per_page_admin" DROP NOT NULL`,
		);
		await queryRunner.query(
			`ALTER TABLE "settings" ALTER COLUMN "default_items_per_page" DROP DEFAULT`,
		);
		await queryRunner.query(
			`ALTER TABLE "settings" ALTER COLUMN "default_items_per_page" DROP NOT NULL`,
		);
		await queryRunner.query(
			`ALTER TABLE "settings" DROP COLUMN "list_description_limit"`,
		);
		await queryRunner.query(
			`ALTER TABLE "settings" ADD "list_description_limit" character varying`,
		);
	}
}
