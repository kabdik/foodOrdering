import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RestaurantManagerEntity } from './entities/restaurant-manager.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantManagerEntity])],
})
export class RestaurantManagerModule {}
