<template>
  <h2>
    {{ title }}
  </h2>
  <WorkoutForm v-bind="{ title, changeTitle }" />
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import WorkoutForm from "./WorkoutForm.vue";
export default defineComponent({
  name: "WorkoutContainer",
  props: {},
  components: {
    WorkoutForm,
  },
  methods: {},
  setup: () => {
    const title = ref("Workout App");
    const changeTitle = (e) => {
      title.value = e.target.value;
    };
    return { title, changeTitle };
  },
});
</script>