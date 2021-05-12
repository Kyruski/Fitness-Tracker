<template>
  <tr>
    <td v-for="(foodItem, index) in foodArray" :key="index">{{ foodItem }}</td>
  </tr>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IMeal } from "./types/types";

export default defineComponent({
  name: "MealItem",
  props: {
    item: {
      type: Object as () => IMeal,
      required: true,
    },
  },
  computed: {
    foodArray() {
      return [
        this.item.name,
        this.item.calories,
        this.item.carbs,
        this.item.fats,
        this.item.pro,
      ];
    },
  },
  setup() {},
});
</script>
