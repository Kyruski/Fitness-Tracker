<template>
  <div>
    <table>
      <tr>
        <th v-for="(header, index) in headers" :key="index">
          {{ header[0] }}
          <div>{{ header[1] }}</div>
        </th>
      </tr>
      <MealItem
        v-for="(item, index) in meal.mealArray"
        :key="index"
        :item="item"
      />
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MealType } from "./models/index";
import MealItem from "./MealItem.vue";
export default defineComponent({
  name: "Meal",
  props: {
    meal: {
      type: MealType,
      required: true,
    },
  },
  components: {
    MealItem,
  },
  computed: {
    headers() {
      return [
        [this.meal.mealTitle, ""],
        ["Calories", "kcal"],
        ["Carbs", "g"],
        ["Fat", "g"],
        ["Pro", "g"],
      ];
    },
  },
  setup() {},
});
</script>

<style scoped>
table {
  margin: 0 auto;
}
</style>