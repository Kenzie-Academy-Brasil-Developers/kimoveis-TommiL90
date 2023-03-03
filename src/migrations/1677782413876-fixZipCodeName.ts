import { MigrationInterface, QueryRunner } from "typeorm";

export class fixZipCodeName1677782413876 implements MigrationInterface {
    name = 'fixZipCodeName1677782413876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "zipcode" TO "zipCode"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "zipCode" TO "zipcode"`);
    }

}
