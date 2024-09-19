import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrated1726492710373 implements MigrationInterface {
    name = 'Migrated1726492710373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "settings" ADD CONSTRAINT "PK_0669fe20e252eb692bf4d344975" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "data" jsonb NOT NULL DEFAULT '{}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "data"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP CONSTRAINT "PK_0669fe20e252eb692bf4d344975"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "id"`);
    }

}
