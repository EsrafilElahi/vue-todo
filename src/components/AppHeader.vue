<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

interface Prop {
  title: string;
}

const props = withDefaults(defineProps<Prop>(), {
  title: "Default Title",
});

</script>

<template>
  <h1 class="text-3xl text-primary-300 font-bold">{{ title }}</h1>
</template>
