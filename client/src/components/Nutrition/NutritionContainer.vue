<template>
  <div>
    <h2>
      {{ title }}
    </h2>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "NutritionContainer",
  props: {},
  components: {},
  methods: {},
  setup: () => {
    const title = ref("Nutrition App");
    const changeTitle = (e) => {
      title.value = e.target.value;
    };
    return { title, changeTitle };
  },
});
</script>