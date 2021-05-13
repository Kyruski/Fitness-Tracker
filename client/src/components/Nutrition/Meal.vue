<template>
  <div>
    <table v-if="isOpen" class="open-view">
      <tr @click="changeIsOpen()">
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
    <table v-else class="close-view">
      <tr @click="changeIsOpen()">
        <MealItem :item="closeView" />
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
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
    closeView() {
      const totals = this.meal.mealArray[this.meal.mealArray.length - 1];
      const output = {
        name: this.headers[0][0],
        carbs: `${this.headers[1][0]}: ${totals.carbs}${this.headers[1][1]}`,
        fats: `${this.headers[2][0]}: ${totals.fats}${this.headers[2][1]}`,
        pro: `${this.headers[3][0]}: ${totals.pro}${this.headers[3][1]}`,
        calories: `${this.headers[4][0]}: ${totals.calories}${this.headers[4][1]}`,
      };
      console.log(output);
      return output;
    },
  },
  setup() {
    const isOpen = ref(false);
    const changeIsOpen = () => {
      isOpen.value = !isOpen.value;
    };

    return { isOpen, changeIsOpen };
  },
});
</script>

<style >
table {
  margin: 0 auto;
  width: 550px;
  border: 1px solid black;
}

th:nth-child(1),
td:nth-child(1) {
  text-align: left;
}

th:last-child,
td:last-child {
  width: 150px;
}

.open-view tr:last-child > td,
.open-view tr:nth-child(2) > td {
  border-top: 1px rgb(218, 215, 215) solid;
}

tr:last-child {
  font-weight: 700;
}

tr > td {
  width: 100px;
}
</style>