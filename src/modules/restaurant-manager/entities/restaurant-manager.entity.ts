import { BaseEntity } from "@/common/entities/base.entity";
import { TableName } from "@/common/enums/table";
import { UserEntity } from "@/modules/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import type { RestaurantManager } from "../interfaces/restaurant-manager.interface";

@Entity(TableName.RESTAURANT_MANAGER)
export class RestaurantManagerEntity extends BaseEntity implements RestaurantManager{
    @Column('int')
    userId!: number;

    @OneToOne(()=>UserEntity,{onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({name:'userId'})
    user?:UserEntity
}