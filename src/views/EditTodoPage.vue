<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
const router = useRouter();
const route = useRoute();
console.log({ route });
</script>

<template>
  <div class="flex-col-center gap-10 text-center p-2">
    <AppHeader :title="`Edit Todo With TodoId ${$route.params.todoId}`" />
  </div>
</template>
