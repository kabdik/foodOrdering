import type { MigrationInterface, QueryRunner } from "typeorm";

export class updateRatingNullable1673699275419 implements MigrationInterface {
    name = 'updateRatingNullable1673699275419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "rating" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "rating" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "rating" SET DEFAULT '0.1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "rating" SET DEFAULT 0.1`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "rating" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "rating" TYPE numeric`);
    }

}
