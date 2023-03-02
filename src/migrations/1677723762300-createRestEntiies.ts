import { MigrationInterface, QueryRunner } from "typeorm";

export class createRestEntiies1677723762300 implements MigrationInterface {
    name = 'createRestEntiies1677723762300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules_users_propierties" ("id" SERIAL NOT NULL, "name" date NOT NULL, "email" TIME NOT NULL, "userId" integer, "realEstateId" integer, CONSTRAINT "PK_599f54457935339503e550b3296" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules_users_propierties" ADD CONSTRAINT "FK_45c6fdc36d0aa7753a97cc5566f" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_users_propierties" ADD CONSTRAINT "FK_87fb57f8328eb7a9540b19d6067" FOREIGN KEY ("realEstateId") REFERENCES "real_estate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_propierties" DROP CONSTRAINT "FK_87fb57f8328eb7a9540b19d6067"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_propierties" DROP CONSTRAINT "FK_45c6fdc36d0aa7753a97cc5566f"`);
        await queryRunner.query(`DROP TABLE "schedules_users_propierties"`);
    }

}
