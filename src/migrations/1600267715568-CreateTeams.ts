import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTeams1600267715568 implements MigrationInterface {
    name = 'CreateTeams1600267715568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "athlete" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" integer NOT NULL, "name" character varying(300) NOT NULL, CONSTRAINT "PK_8bf51e0689529ca963f10949596" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "team" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "description" character varying(300) NOT NULL, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "team"`);
        await queryRunner.query(`DROP TABLE "athlete"`);
    }

}
