import { CityEntity } from '../cities/city.entity';
import { MealEntity } from '../meal/entities/meal.entity';
import { RestaurantManagerEntity } from '../restaurant-manager/entities/restaurant-manager.entity';
import { RestaurantEntity } from '../restaurant/entities/restaurant.entity';
import { UserEntity } from '../user/entities/user.entity';

export const ADMINJS_RESOURCES = [
  RestaurantEntity,
  CityEntity,
  MealEntity,
  RestaurantManagerEntity,
  UserEntity,
];
