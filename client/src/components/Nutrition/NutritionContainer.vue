<template>
  <div>
    <h2>
      {{ title }}
    </h2>
    <Meal v-for="(meal, index) in nutritionData" :meal="meal" :key="index" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import Meal from "./Meal.vue";
import { dayOfMeals, foodItems } from "./scripts/scripts";

export default defineComponent({
  name: "NutritionContainer",
  props: {},
  components: { Meal },
  methods: {},
  computed: {
    nutritionData() {
      const output = [];
      const totals = { calories: 0, carbs: 0, fats: 0, pro: 0 };
      //loop through different meals
      for (let meal of dayOfMeals) {
        const mealArray = [];
        const mealTotals = {
          name: "Total",
          calories: 0,
          carbs: 0,
          fats: 0,
          pro: 0,
        };
        //loop through each food of each meal
        for (let food of meal.mealArray) {
          //create a food object with name and macros
          const foodObj = {
            name: foodItems[food.foodID].name,
            calories: foodItems[food.foodID].calories * food.servings,
            carbs: foodItems[food.foodID].carbs * food.servings,
            fats: foodItems[food.foodID].fats * food.servings,
            pro: foodItems[food.foodID].pro * food.servings,
          };
          //push into meal array
          mealArray.push(foodObj);
          for (let header in totals) {
            //compute the totals for the meal and day
            mealTotals[header] += foodObj[header];
            totals[header] += foodObj[header];
          }
        }
        mealArray.push(mealTotals);
        output.push({ mealTitle: meal.mealTitle, mealArray });
      }
      //Add the Daily totals to data array
      output.push({
        mealTitle: "Daily Totals",
        mealArray: [{ name: "", ...totals }],
      });
      return output;
    },
  },
  setup: () => {
    const title = ref("Nutrition App");

    const changeTitle = (e) => {
      title.value = e.target.value;
    };
    return { title, changeTitle };
  },
});
</script>