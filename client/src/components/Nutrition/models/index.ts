import { IMeal, IFood, IFoodItem } from '../types/types';

export class FoodItemType implements IFoodItem {

  food: IFood;
  servings: number;

  constructor(food: IFood, servings: number) {
    this.food = food;
    this.servings = servings;
  }
}

export class MealType implements IMeal {

  mealTitle: string;
  mealArray: IFoodItem[];

  constructor(mealTitle: string, mealArray: IFoodItem[]) {
    this.mealTitle = mealTitle;
    this.mealArray = mealArray;
  }
}