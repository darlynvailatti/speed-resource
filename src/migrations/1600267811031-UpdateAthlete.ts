import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateAthlete1600267811031 implements MigrationInterface {
    name = 'UpdateAthlete1600267811031'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "athlete" DROP COLUMN "code"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "athlete" ADD "code" integer NOT NULL`);
    }

}
