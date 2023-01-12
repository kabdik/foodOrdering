import type { BaseEntity } from '@/common/entities/base.entity';

export interface Organization extends BaseEntity {
  name:string;
  phone:string;
  cityId:number;
  rating:number;
}
