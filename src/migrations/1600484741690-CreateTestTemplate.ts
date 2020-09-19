import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTestTemplate1600484741690 implements MigrationInterface {
    name = 'CreateTestTemplate1600484741690'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test-template" ("id" SERIAL NOT NULL, "graph" json NOT NULL, CONSTRAINT "PK_dfef9fc6cfd8539fab9ab4bc63e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "test-template"`);
    }

}
