import { MigrationInterface, QueryRunner } from "typeorm";

export class test11677867730575 implements MigrationInterface {
    name = 'test11677867730575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" SET NOT NULL`);
    }

}
