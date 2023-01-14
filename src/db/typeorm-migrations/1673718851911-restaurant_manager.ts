import type { MigrationInterface, QueryRunner } from "typeorm";

export class restaurantManager1673718851911 implements MigrationInterface {
    name = 'restaurantManager1673718851911'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "meal" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" text NOT NULL, "calories" integer NOT NULL, "photo" character varying, "restaurantId" integer NOT NULL, CONSTRAINT "UQ_95b36510bcf026f3dbc73bc71cf" UNIQUE ("name"), CONSTRAINT "PK_ada510a5aba19e6bb500f8f7817" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'moderator', 'restaurant_manager', 'user')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "surname" character varying NOT NULL, "email" character varying NOT NULL, "phone" text NOT NULL, "password" character varying NOT NULL, "role" "public"."user_role_enum" DEFAULT 'user', CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_8e1f623798118e629b46a9e6299" UNIQUE ("phone"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "restaurant_manager" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "userId" integer NOT NULL, CONSTRAINT "REL_24843a82905b3c8b87bbba86e2" UNIQUE ("userId"), CONSTRAINT "PK_e7151536f46a478dfe80971ffa6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "rating" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "rating" SET DEFAULT '0.1'`);
        await queryRunner.query(`ALTER TABLE "meal" ADD CONSTRAINT "FK_1edadecc84f4c99bca5f9256222" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "restaurant_manager" ADD CONSTRAINT "FK_24843a82905b3c8b87bbba86e21" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "restaurant_manager" DROP CONSTRAINT "FK_24843a82905b3c8b87bbba86e21"`);
        await queryRunner.query(`ALTER TABLE "meal" DROP CONSTRAINT "FK_1edadecc84f4c99bca5f9256222"`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "rating" SET DEFAULT 0.1`);
        await queryRunner.query(`ALTER TABLE "restaurant" ALTER COLUMN "rating" TYPE numeric`);
        await queryRunner.query(`DROP TABLE "restaurant_manager"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`DROP TABLE "meal"`);
    }

}
