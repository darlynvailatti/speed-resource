import {MigrationInterface, QueryRunner} from "typeorm";

export class OneTemplateCouldContainsManyTests1601213020191 implements MigrationInterface {
    name = 'OneTemplateCouldContainsManyTests1601213020191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" DROP CONSTRAINT "FK_3f940ba7a533b88a1104496db3a"`);
        await queryRunner.query(`ALTER TABLE "test" DROP CONSTRAINT "REL_3f940ba7a533b88a1104496db3"`);
        await queryRunner.query(`ALTER TABLE "test" ADD CONSTRAINT "FK_3f940ba7a533b88a1104496db3a" FOREIGN KEY ("templateId") REFERENCES "test-template"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" DROP CONSTRAINT "FK_3f940ba7a533b88a1104496db3a"`);
        await queryRunner.query(`ALTER TABLE "test" ADD CONSTRAINT "REL_3f940ba7a533b88a1104496db3" UNIQUE ("templateId")`);
        await queryRunner.query(`ALTER TABLE "test" ADD CONSTRAINT "FK_3f940ba7a533b88a1104496db3a" FOREIGN KEY ("templateId") REFERENCES "test-template"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
