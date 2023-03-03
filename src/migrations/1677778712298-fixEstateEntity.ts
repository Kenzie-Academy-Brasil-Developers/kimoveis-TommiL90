import { MigrationInterface, QueryRunner } from "typeorm";

export class fixEstateEntity1677778712298 implements MigrationInterface {
    name = 'fixEstateEntity1677778712298'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "admin"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "size" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "size"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "password" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

}
