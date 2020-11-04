import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateTestExecutionModel1602246163693 implements MigrationInterface {
    name = 'UpdateTestExecutionModel1602246163693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test-execution-edge" ("id" SERIAL NOT NULL, "sequence" integer NOT NULL, "description" character varying NOT NULL, "startTimeStamp" integer NOT NULL, "endTimeStamp" integer NOT NULL, "distance" double precision NOT NULL, "startNode" character varying NOT NULL, "endNode" character varying NOT NULL, "turnId" integer, CONSTRAINT "PK_001bdb3393a4dd7744cbccead34" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "test-execution-turn" DROP COLUMN "recordedStartedTime"`);
        await queryRunner.query(`ALTER TABLE "test-execution-turn" DROP COLUMN "recordedEndTime"`);
        await queryRunner.query(`ALTER TABLE "test-execution-turn" ADD "endTimeStamp" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test-execution-edge" ADD CONSTRAINT "FK_970efa1326f5568887226d8b98d" FOREIGN KEY ("turnId") REFERENCES "test-execution-turn"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test-execution-edge" DROP CONSTRAINT "FK_970efa1326f5568887226d8b98d"`);
        await queryRunner.query(`ALTER TABLE "test-execution-turn" DROP COLUMN "endTimeStamp"`);
        await queryRunner.query(`ALTER TABLE "test-execution-turn" ADD "recordedEndTime" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "test-execution-turn" ADD "recordedStartedTime" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "test-execution-edge"`);
    }

}
