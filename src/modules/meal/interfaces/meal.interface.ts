import type { BaseEntity } from '@/common/entities/base.entity';

export interface Meal extends BaseEntity {
  name:string;
  photo:string;
  description: string;
  calories:number;
  restaurantId:number;
}
