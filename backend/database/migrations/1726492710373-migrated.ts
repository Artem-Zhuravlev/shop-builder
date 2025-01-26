import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrated1726492710373 implements MigrationInterface {
    name = 'Migrated1726492710373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Добавляем колонку id, только если она не существует
        await queryRunner.query(`
            DO $$
            BEGIN
                IF NOT EXISTS (
                    SELECT 1
                    FROM information_schema.columns
                    WHERE table_name = 'settings' AND column_name = 'id'
                ) THEN
                    ALTER TABLE "settings" ADD "id" SERIAL NOT NULL;
                    ALTER TABLE "settings" ADD CONSTRAINT "PK_0669fe20e252eb692bf4d344975" PRIMARY KEY ("id");
                END IF;
            END;
            $$;
        `);

        // Добавляем колонку data, только если она не существует
        await queryRunner.query(`
            DO $$
            BEGIN
                IF NOT EXISTS (
                    SELECT 1
                    FROM information_schema.columns
                    WHERE table_name = 'settings' AND column_name = 'data'
                ) THEN
                    ALTER TABLE "settings" ADD "data" jsonb NOT NULL DEFAULT '{}';
                END IF;
            END;
            $$;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Удаляем колонку data
        await queryRunner.query(`
            DO $$
            BEGIN
                IF EXISTS (
                    SELECT 1
                    FROM information_schema.columns
                    WHERE table_name = 'settings' AND column_name = 'data'
                ) THEN
                    ALTER TABLE "settings" DROP COLUMN "data";
                END IF;
            END;
            $$;
        `);

        // Удаляем primary key constraint
        await queryRunner.query(`
            DO $$
            BEGIN
                IF EXISTS (
                    SELECT 1
                    FROM pg_constraint
                    WHERE conname = 'PK_0669fe20e252eb692bf4d344975'
                ) THEN
                    ALTER TABLE "settings" DROP CONSTRAINT "PK_0669fe20e252eb692bf4d344975";
                END IF;
            END;
            $$;
        `);

        // Удаляем колонку id
        await queryRunner.query(`
            DO $$
            BEGIN
                IF EXISTS (
                    SELECT 1
                    FROM information_schema.columns
                    WHERE table_name = 'settings' AND column_name = 'id'
                ) THEN
                    ALTER TABLE "settings" DROP COLUMN "id";
                END IF;
            END;
            $$;
        `);
    }
}