import { foodsList } from './foodlist.js';

const meals = ["Breakfast", "Lunch", "Dinner"];
const foodItems = makeFoods();


//Generates a food with random nutritional value
function makeFoods() {
  const foods = [];
  for (let i = 0; i < foodsList.length; i++) {
    const calories = Math.floor(Math.random() * 100); //Ranodm calories between 0-100
    const name = foodsList[i]; //Pull name from Food list
    let carbs = Math.round(Math.random() * 100); // carbs as % of calories
    let pro = Math.round(Math.random() * (100 - carbs)); //see carbs
    let fats = 100 - carbs - pro; //see pro
    carbs = Math.round((calories * carbs) / 100 / 4), //converting to grams, 4kcal/1g
    fats = Math.round((calories * fats) / 100 / 9), //converting to grams 9kcal/1g
    pro = Math.round((calories * pro) / 100 / 4) //converting to grams, 4kcal/1g
    foods.push({
      id: i,
      name,
      calories,
      carbs,
      pro,
      fats,
    });
  }
  // fs.appendFileSync('foods.json', JSON.stringify(foods));
  return foods;
}

//Generates a meal with random foods
function makeMeal() {
  const numItems = 1 + Math.floor((Math.random() * 4)); //Determine how many food items
  const meal = [];
  for (let i = 0; i < numItems; i++) {
    const itemID = Math.floor(Math.random() * foodsList.length);
    const servings = Math.floor(Math.random() * 4) + 1;
    meal.push({
      food: foodItems[itemID],
      servings
    });
  }
  return meal;
}


//Makes a Day with 3 meals
function makeDay() {
  const meals = [];
  const mealNames = ["Breakfast", "Lunch", "Dinner"];
  for (let i = 0; i < mealNames.length; i++) {
    let meal = {mealTitle: mealNames[i], mealArray: makeMeal()}
    meals.push(meal);
  }
  return meals;
}

const dayOfMeals = makeDay();

export default dayOfMeals;

