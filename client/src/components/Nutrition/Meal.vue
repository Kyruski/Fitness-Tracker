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
import MealItem from "./MealItem.vue";
import { IFoodItem } from "./types/types";
export default defineComponent({
  name: "Meal",
  props: {
    meal: {
      type: Object as () => IFoodItem,
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
        ["Carbs", "g"],
        ["Fat", "g"],
        ["Pro", "g"],
        ["Calories", "kcal"],
      ];
    },
    totals() {},
  },
  setup() {},
});
</script>

<style >
table {
  margin: 0 auto;
  width: 390px;
  border: 1px solid black;
}

th {
  border-bottom: 1px rgb(161, 153, 153) solid;
}

th:nth-child(1),
td:nth-child(1) {
  width: 135px;
  text-align: left;
}

th:nth-child(2),
td:nth-child(2) {
  width: 75px;
}

tr:last-child {
  font-weight: 700;
}

tr > td {
  width: 60px;
}
</style>