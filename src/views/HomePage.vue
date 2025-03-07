<script setup lang="ts">
import { ref } from "vue";
import AppHeader from "../components/AppHeader.vue";
import type { Todo } from "../types/allTypes.ts";
import TodoItem from "../components/TodoItem.vue";

const todos = ref<Todo[]>([
  {
    id: 1,
    title: "todo 1",
    description: "description 1",
    priority: "mid",
    done: false,
  },
  {
    id: 2,
    title: "todo 2",
    description: "description 2",
    priority: "low",
    done: true,
  },
  {
    id: 3,
    title: "todo 3",
    description: "description 3",
    priority: "high",
    done: false,
  },
]);
</script>

<template>
  <div class="text-center p-2">
    <AppHeader title="Todo List" />

    <div class="mt-10 flex items-center justify-center flex-col gap-5">
      <div
        v-for="todo in todos"
        :key="todo.id"
        class="w-[25rem] border border-primary-200 rounded-md p-3 cursor-pointer"
      >
        <TodoItem :todo="todo" />
      </div>
    </div>
  </div>
</template>
<style></style>
