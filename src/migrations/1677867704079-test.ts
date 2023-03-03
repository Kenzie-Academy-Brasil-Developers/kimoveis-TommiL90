import { MigrationInterface, QueryRunner } from "typeorm";

export class test1677867704079 implements MigrationInterface {
    name = 'test1677867704079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" SET NOT NULL`);
    }

}
