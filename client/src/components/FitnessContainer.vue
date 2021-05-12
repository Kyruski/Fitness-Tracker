<template>
  <div>
    <h1>Fitness Tracker</h1>

    <button @click="changeView('Workout')">Workout</button>
    <button @click="changeView('Nutrition')">Nutrition</button>
    <div v-if="openView === 'Workout'">
      <WorkoutContainer />
    </div>
    <div v-else>
      <NutritionContainer />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import WorkoutContainer from "./Workout/WorkoutContainer.vue";
import NutritionContainer from "./Nutrition/NutritionContainer.vue";
export default defineComponent({
  name: "HelloWorld",
  props: {},
  components: { WorkoutContainer, NutritionContainer },
  setup: () => {
    const openView = ref("Workout");
    const changeView = (view) => {
      openView.value = view;
    };
    return { openView, changeView };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
