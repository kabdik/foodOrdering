import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MealEntity } from './entities/meal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MealEntity])],
})
export class MealModule {}
