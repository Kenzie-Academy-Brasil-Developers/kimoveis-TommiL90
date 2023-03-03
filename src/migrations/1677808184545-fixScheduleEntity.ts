import { MigrationInterface, QueryRunner } from "typeorm";

export class fixScheduleEntity1677808184545 implements MigrationInterface {
    name = 'fixScheduleEntity1677808184545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_propierties" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_propierties" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_propierties" ADD "date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_users_propierties" ADD "hour" TIME NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_propierties" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_propierties" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_propierties" ADD "email" TIME NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules_users_propierties" ADD "name" date NOT NULL`);
    }

}
