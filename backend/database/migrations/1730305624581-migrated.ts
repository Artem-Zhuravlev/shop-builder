import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrated1730305624581 implements MigrationInterface {
    name = 'Migrated1730305624581'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "languages" ("id" SERIAL NOT NULL, "name" character varying, "code" character varying NOT NULL, "locale" character varying NOT NULL, "sort_order" boolean DEFAULT false, "status" boolean DEFAULT true, CONSTRAINT "PK_b517f827ca496b29f4d549c631d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "languages"`);
    }

}
