<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
import type { PriorityOption } from "../types/allTypes";
// const router = useRouter();
// const route = useRoute();

const priorityOptions = ref<PriorityOption[]>([
  { id: 1, label: "Low", value: "low" },
  { id: 2, label: "Mid", value: "mid" },
  { id: 3, label: "High", value: "high" },
]);
</script>

<template>
  <div class="flex-col-center gap-10 text-center p-2 max-w-[40rem] mx-auto">
    <AppHeader :title="`Edit Todo With TodoId ${$route.params.todoId}`" />

    <div class="w-full flex-col-center gap-2">
      <label for="title">title</label>
      <input class="border rounded p-2" name="title" placeholder="edit task" />
    </div>

    <div class="w-full flex-col-center gap-2">
      <label for="priority">priority</label>
      <select class="border rounded p-2" name="priority">
        <option disabled value="">Please select one</option>
        <option>Low</option>
        <option>Mid</option>
        <option>High</option>
      </select>
    </div>

    <div class="w-full flex-col-center gap-2">
      <label for="description">description</label>
      <textarea
        class="border rounded p-2"
        placeholder="description"
        name="description"
      ></textarea>
    </div>

    <div class="flex-center gap-4">
      <button class="btn">save</button>
      <button class="btn">back</button>
      <button class="btn">cancel</button>
    </div>
  </div>
</template>
