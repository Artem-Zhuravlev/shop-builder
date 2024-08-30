import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrated1724956101273 implements MigrationInterface {
    name = 'Migrated1724956101273'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "use_store_tax_address"`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "use_store_tax_address" json`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "use_store_tax_address"`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "use_store_tax_address" boolean NOT NULL DEFAULT false`);
    }

}
