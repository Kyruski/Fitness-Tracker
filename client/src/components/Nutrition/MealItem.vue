<template>
  <tr>
    <td v-for="(foodItem, index) in foodArray" :key="index">{{ foodItem }}</td>
  </tr>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IFood } from "./types/types";

export default defineComponent({
  name: "MealItem",
  props: {
    item: {
      type: Object as () => IFood,
      required: true,
    },
  },
  computed: {
    foodArray() {
      console.log("abc", this.item);
      return [
        this.item.name,
        this.item.carbs,
        this.item.fats,
        this.item.pro,
        this.item.calories,
      ];
    },
  },
  setup() {},
});
</script>
