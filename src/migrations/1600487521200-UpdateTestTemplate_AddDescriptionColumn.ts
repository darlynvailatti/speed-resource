import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateTestTemplateAddDescriptionColumn1600487521200 implements MigrationInterface {
    name = 'UpdateTestTemplateAddDescriptionColumn1600487521200'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test-template" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test-template" DROP COLUMN "description"`);
    }

}
