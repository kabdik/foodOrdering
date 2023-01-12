import { BaseEntity } from "@/common/entities/base.entity";
import { TableName } from "@/common/enums/table";
import { Column, Entity } from "typeorm";
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

    
}