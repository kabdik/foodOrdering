import type { MigrationInterface, QueryRunner } from "typeorm";

export class relationCityOrganizaiton1673547889080 implements MigrationInterface {
    name = 'relationCityOrganizaiton1673547889080'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organization" ALTER COLUMN "rating" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "organization" ADD CONSTRAINT "FK_3547ebdf0b0a5a0efb3635d2961" FOREIGN KEY ("cityId") REFERENCES "city"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organization" DROP CONSTRAINT "FK_3547ebdf0b0a5a0efb3635d2961"`);
        await queryRunner.query(`ALTER TABLE "organization" ALTER COLUMN "rating" TYPE numeric`);
    }

}
