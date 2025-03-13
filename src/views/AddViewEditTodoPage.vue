<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute, type RouteLocationNamedRaw } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
import type { PriorityOption } from "../types/allTypes";
const router = useRouter();
const route = useRoute();

const priorityOptions = ref<PriorityOption[]>([
  { id: 1, label: "Low", value: "low" },
  { id: 2, label: "Mid", value: "mid" },
  { id: 3, label: "High", value: "high" },
]);

const queryFrom = {
  create: "Create",
  view: "View",
  edit: "Edit",
  null: "",
};

const queryFromText = queryFrom[route.query?.from] || "Unknown";

const todoData = ref({
  title: "",
  priority: "",
  description: "",
});
</script>

<template>
  <div class="flex-col-center gap-10 text-center p-2 max-w-[40rem] mx-auto">
    <AppHeader :title="`${queryFromText} Todo ${$route.params.todoId || ''}`" />

    <div class="w-full flex-col-center gap-2">
      <label for="title">title</label>
      <input
        v-model="todoData.title"
        class="border rounded p-2"
        name="title"
        placeholder="edit task"
      />
    </div>

    <div class="w-full flex-col-center gap-2">
      <label for="priority">priority</label>
      <select
        v-model="todoData.priority"
        class="border rounded p-2"
        name="priority"
      >
        <option disabled value="">Please select one</option>
        <option
          v-for="option in priorityOptions"
          :value="option.value"
          :key="option.id"
        >
          {{ option.label }}
        </option>
      </select>
    </div>

    <div class="w-full flex-col-center gap-2">
      <label for="description">description</label>
      <textarea
        v-model="todoData.description"
        class="border rounded p-2"
        placeholder="description"
        name="description"
      ></textarea>
    </div>

    <div class="flex-center gap-4">
      <button class="btn">{{ route.query.from }}</button>
      <button
        class="btn"
        @click="router.push({ name: 'todos' } as RouteLocationNamedRaw)"
      >
        back
      </button>
      <button class="btn">cancel</button>
    </div>
  </div>
</template>
