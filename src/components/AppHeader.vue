<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    required: true,
    type: String,
    default: "",
  },
});

console.log(props);
</script>

<template>
  <h1 class="text-3xl text-primary-300 font-bold">{{ title }}</h1>
</template>
