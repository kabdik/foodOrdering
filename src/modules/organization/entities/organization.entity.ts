import { BaseEntity } from "@/common/entities/base.entity";
import { TableName } from "@/common/enums/table";
import { CityEntity } from "@/modules/cities/city.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import type { Organization } from "../interfaces/organization.interface";

@Entity(TableName.ORGANIZATION)
export class OrganizationEntity extends BaseEntity implements Organization {
    @Column('varchar')
    name!:string

    @Column('text')
    phone!:string

    @Column('int')
    cityId!:number

    @Column('decimal',{scale:1,default:0})
    rating!:number

    @ManyToOne(()=>CityEntity,{
        onDelete:"SET NULL",
        onUpdate:"CASCADE"
})
    @JoinColumn({name:'cityId'})
    city?:CityEntity
}