import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationTest1600268469842 implements MigrationInterface {
    name = 'migrationTest1600268469842'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "athlete" ADD "code" character varying(300) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "athlete" DROP COLUMN "code"`);
    }

}
