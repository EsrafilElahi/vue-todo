<script setup lang="ts">
import { ref, computed } from "vue";
import AppHeader from "../components/AppHeader.vue";
import type { Todo, FilterNames } from "../types/allTypes.ts";
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
  {
    id: 4,
    title: "todo 4",
    description: "description 4",
    priority: "high",
    done: true,
  },
  {
    id: 5,
    title: "todo 5",
    description: "description 5",
    priority: "low",
    done: false,
  },
  {
    id: 6,
    title: "todo 6",
    description: "description 6",
    priority: "low",
    done: false,
  },
]);

const selectedFilter = ref<FilterNames>("all");

const filteredTodos = computed(() => {
  const filterNames: Record<FilterNames, Todo[]> = {
    low: todos.value.filter((todo) => todo.priority === "low"),
    high: todos.value.filter((todo) => todo.priority === "high"),
    done: todos.value.filter((todo) => todo.done),
    all: todos.value,
  };

  return filterNames[selectedFilter.value] as Todo[];
});

const handleSelectFilter = (filterName: FilterNames) => {
  selectedFilter.value = filterName;
};
</script>

<template>
  <div class="flex-col-center gap-10 text-center p-2">
    <AppHeader title="Todo List" />

    <div class="flex-center gap-3">
      <button class="btn" @click="handleSelectFilter('all')">All</button>
      <button class="btn" @click="handleSelectFilter('low')">Low</button>
      <button class="btn" @click="handleSelectFilter('high')">High</button>
      <button class="btn" @click="handleSelectFilter('done')">Done</button>
    </div>

    <div class="flex-col-center gap-5">
      <div
        v-if="filteredTodos.length"
        v-for="todo in filteredTodos"
        :key="todo.id"
        class="w-[25rem] border border-primary-200 rounded-md p-3 cursor-pointer"
      >
        <TodoItem :todo="todo" />
      </div>
    </div>
  </div>
</template>
<style></style>
