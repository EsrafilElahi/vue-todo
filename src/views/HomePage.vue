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
  <div class="flex-col-center gap-10 text-center p-2">
    <AppHeader title="Todo List" />

    <div class="flex-center gap-3">
      <button class="btn">all</button>
      <button class="btn">low</button>
      <button class="btn">high</button>
      <button class="btn">done</button>
    </div>

    <div class="flex-col-center gap-5">
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
