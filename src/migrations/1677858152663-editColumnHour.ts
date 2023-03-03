import { MigrationInterface, QueryRunner } from "typeorm";

export class editColumnHour1677858152663 implements MigrationInterface {
    name = 'editColumnHour1677858152663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT true`);
    }

}
