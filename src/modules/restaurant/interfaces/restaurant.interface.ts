import type { BaseEntity } from '@/common/entities/base.entity';

export interface Restaurant extends BaseEntity {
  name:string;
  phone:string;
  cityId:number;
  rating:number;
}
