import { MigrationInterface, QueryRunner } from "typeorm";

export class createOneToManyInCategories1677731781028 implements MigrationInterface {
    name = 'createOneToManyInCategories1677731781028'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_b1789fdaa1e7a49cd8ac01ee03c"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "userId" TO "categoryId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_e64472d578faf91bee90a06ecc0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "categoryId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_b1789fdaa1e7a49cd8ac01ee03c" FOREIGN KEY ("userId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
