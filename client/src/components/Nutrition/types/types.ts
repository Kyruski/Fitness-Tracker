export interface IFood {
  name: string;
  calories: number;
  carbs: number;
  pro: number;
  fats: number;
}

export interface IFoodItem {
  food: number;
  servings: number;
}

export interface IMeal {
  mealTitle: string;
  mealArray: IFoodItem[]
}