import { BaseEntity } from "@/common/entities/base.entity";
import { TableName } from "@/common/enums/table";
import { RestaurantEntity } from "@/modules/restaurant/entities/restaurant.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import type { Meal } from "../interfaces/meal.interface";

@Entity(TableName.MEAL)
export class MealEntity extends BaseEntity implements Meal{
    @Column('varchar',{unique:true})
    name!:string

    @Column('text')
    description!:string

    @Column('integer')
    calories!:number

    //Ask Kaini
    @Column('varchar',{nullable:true})
    photo!:string

    @Column('integer')
    restaurantId!: number;

    @ManyToOne(()=>RestaurantEntity,{onDelete:'CASCADE',onUpdate:'CASCADE'})
    @JoinColumn({name:'restaurantId'})
    restaurant?:RestaurantEntity
}