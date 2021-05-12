<template>
  <tr>
    <td v-for="(foodItem, index) in foodArray" :key="index">{{ foodItem }}</td>
  </tr>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { MealType } from "./models";

export default defineComponent({
  name: "MealItem",
  props: {
    item: {
      type: MealType,
      required: true,
    },
  },
  computed: {
    foodArray() {
      const { food, servings } = this.item;
      return [
        food.name,
        food.calories * servings,
        food.carbs * servings,
        food.fats * servings,
        food.pro * servings,
      ];
    },
  },
  setup() {},
});
</script>
