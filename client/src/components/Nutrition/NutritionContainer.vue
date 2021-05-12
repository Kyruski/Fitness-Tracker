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
import dayOfMeals from "./scripts/scripts";

export default defineComponent({
  name: "NutritionContainer",
  props: {},
  components: { Meal },
  methods: {},
  setup: () => {
    const title = ref("Nutrition App");
    const nutritionData = ref(dayOfMeals);
    const changeTitle = (e) => {
      title.value = e.target.value;
    };
    return { title, nutritionData, changeTitle };
  },
});
</script>