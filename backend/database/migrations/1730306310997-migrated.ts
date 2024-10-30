import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrated1730306310997 implements MigrationInterface {
    name = 'Migrated1730306310997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "languages" DROP COLUMN "sort_order"`);
        await queryRunner.query(`ALTER TABLE "languages" ADD "sort_order" integer NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "languages" DROP COLUMN "sort_order"`);
        await queryRunner.query(`ALTER TABLE "languages" ADD "sort_order" boolean DEFAULT false`);
    }

}
