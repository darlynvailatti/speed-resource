import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTestEntityAndExecutionEntity1601211933905 implements MigrationInterface {
    name = 'CreateTestEntityAndExecutionEntity1601211933905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "test_state_enum" AS ENUM('IDLE', 'READY', 'STARTED', 'DONE', 'CANCELLED')`);
        await queryRunner.query(`CREATE TABLE "test" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "state" "test_state_enum" NOT NULL DEFAULT 'IDLE', "templateId" integer, CONSTRAINT "REL_3f940ba7a533b88a1104496db3" UNIQUE ("templateId"), CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "test-execution" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, "testId" integer, CONSTRAINT "PK_0f49ca5e2c1913175f9ae071256" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "test-execution-turn" ("id" SERIAL NOT NULL, "number" integer NOT NULL, "startTimeStamp" integer NOT NULL, "recordedStartedTime" character varying NOT NULL, "recordedEndTime" character varying NOT NULL, "executionId" integer, CONSTRAINT "PK_b7577900a0c3ddf7f65ecb35a90" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "test" ADD CONSTRAINT "FK_3f940ba7a533b88a1104496db3a" FOREIGN KEY ("templateId") REFERENCES "test-template"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "test-execution" ADD CONSTRAINT "FK_46eaa0b41b7aa686413957cc710" FOREIGN KEY ("testId") REFERENCES "test"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "test-execution-turn" ADD CONSTRAINT "FK_c41c8246c4b296aeb9bae8bea24" FOREIGN KEY ("executionId") REFERENCES "test-execution"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test-execution-turn" DROP CONSTRAINT "FK_c41c8246c4b296aeb9bae8bea24"`);
        await queryRunner.query(`ALTER TABLE "test-execution" DROP CONSTRAINT "FK_46eaa0b41b7aa686413957cc710"`);
        await queryRunner.query(`ALTER TABLE "test" DROP CONSTRAINT "FK_3f940ba7a533b88a1104496db3a"`);
        await queryRunner.query(`DROP TABLE "test-execution-turn"`);
        await queryRunner.query(`DROP TABLE "test-execution"`);
        await queryRunner.query(`DROP TABLE "test"`);
        await queryRunner.query(`DROP TYPE "test_state_enum"`);
    }

}
