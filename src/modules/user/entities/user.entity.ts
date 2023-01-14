import { BaseEntity } from "@/common/entities/base.entity";
import { TableName } from "@/common/enums/table";
import { Column, Entity } from "typeorm";
import { RoleType } from "../enums/role.enum";
import type { User } from "../interfaces/user.interface";

@Entity(TableName.USER)
export class UserEntity extends BaseEntity implements User{
    @Column('varchar',{nullable:false})
    name!: string;
    
    @Column('varchar',{nullable:false})
    surname!: string
    
    @Column('varchar',{nullable:false,unique:true})
    email!: string;

    @Column('text', {unique:true})
    phone!: string

    @Column('varchar')
    password!: string;

    @Column('enum',{enum:RoleType,nullable:true, default:RoleType.USER})
    role!: RoleType;
} 