import type { MigrationInterface, QueryRunner } from "typeorm";

export class renameOrganizationRestaurant1673548915871 implements MigrationInterface {
    name = 'renameOrganizationRestaurant1673548915871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "restaurant" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "phone" text NOT NULL, "cityId" integer NOT NULL, "rating" numeric NOT NULL DEFAULT '0', CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "restaurant" ADD CONSTRAINT "FK_2dee218ec5352ede6b4d56dcc79" FOREIGN KEY ("cityId") REFERENCES "city"("id") ON DELETE SET NULL ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant" DROP CONSTRAINT "FK_2dee218ec5352ede6b4d56dcc79"`);
        await queryRunner.query(`DROP TABLE "restaurant"`);
    }

}
