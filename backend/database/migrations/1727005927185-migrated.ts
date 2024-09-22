import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrated1727005927185 implements MigrationInterface {
    name = 'Migrated1727005927185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "countries" ("id" SERIAL NOT NULL, "country" character varying, "iso_code_2" character varying(2), "iso_code_3" character varying(3) NOT NULL, "postcode_required" boolean DEFAULT false, "status" boolean DEFAULT true, CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "countries"`);
    }

}
