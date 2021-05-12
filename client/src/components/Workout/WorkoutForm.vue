<template>
  <input type="text" :value="title" @input="changeTitle($event)" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "WorkoutForm",
  props: {
    title: {
      type: String,
      required: true,
    },
    changeTitle: {
      type: Function,
      required: true,
    },
  },
  components: {},
  methods: {},
  setup: () => {},
});
</script>