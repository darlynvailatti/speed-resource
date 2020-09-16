import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateUuidToIdFormat1600282787554 implements MigrationInterface {
    name = 'UpdateUuidToIdFormat1600282787554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "athlete" DROP COLUMN "code"`);
        await queryRunner.query(`ALTER TABLE "athlete" DROP CONSTRAINT "PK_8bf51e0689529ca963f10949596"`);
        await queryRunner.query(`ALTER TABLE "athlete" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "athlete" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "athlete" ADD CONSTRAINT "PK_8bf51e0689529ca963f10949596" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "team" DROP CONSTRAINT "PK_f57d8293406df4af348402e4b74"`);
        await queryRunner.query(`ALTER TABLE "team" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "team" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "team" ADD CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "team" DROP CONSTRAINT "PK_f57d8293406df4af348402e4b74"`);
        await queryRunner.query(`ALTER TABLE "team" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "team" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "team" ADD CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "athlete" DROP CONSTRAINT "PK_8bf51e0689529ca963f10949596"`);
        await queryRunner.query(`ALTER TABLE "athlete" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "athlete" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "athlete" ADD CONSTRAINT "PK_8bf51e0689529ca963f10949596" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "athlete" ADD "code" character varying(300) NOT NULL`);
    }

}
