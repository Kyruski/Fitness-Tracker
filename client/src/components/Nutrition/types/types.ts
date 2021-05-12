export interface IFood {
  id: number;
  name: string;
  calories: number;
  carbs: number;
  pro: number;
  fats: number;
}

export interface IFoodItem {
  food: IFood;
  servings: number;
}

export interface IMeal {
  mealTitle: string;
  mealArray: IFoodItem[]
}