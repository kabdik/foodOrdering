import { CityEntity } from "@/modules/cities/city.entity"
import type { City } from "@/modules/cities/city.interface"
import { In, MigrationInterface, QueryRunner } from "typeorm"

const cityFixture:City[] = require('../fixtures/city.json')

export class cityDataInsert1673546965167 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.insert(CityEntity,cityFixture)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.delete(CityEntity,{id: In(cityFixture.map((city)=>city.id))})
    }

}
