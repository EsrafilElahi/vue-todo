<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import AppHeader from "../components/AppHeader.vue";
import type { Todo, FilterNames } from "../types/allTypes.ts";
import TodoItem from "../components/TodoItem.vue";
import FilterTodos from "../components/FilterTodos.vue";
import SearchTodos from "../components/SearchTodos.vue";
import AppFooter from "../components/AppFooter.vue";
import { useRouter, type RouteLocationNamedRaw } from "vue-router";
import { getTodos, deleteTodo } from "../api/todosApi.ts";

const router = useRouter();

const todos = ref<Todo[]>([]);

const searchedTodo = ref<string>("");

const selectedFilter = ref<FilterNames>("all");

const filteredTodos = computed(() => {
  const filterNames: Record<FilterNames, Todo[]> = {
    low: todos.value.filter((todo) => todo.priority === "low"),
    high: todos.value.filter((todo) => todo.priority === "high"),
    done: todos.value.filter((todo) => todo.done),
    all: todos.value,
  };

  const completeFilteredTodos = filterNames[selectedFilter.value] || [];

  const searchedFilterTodo = completeFilteredTodos.filter((todo) => {
    return todo.title.toLowerCase().includes(searchedTodo.value.toLowerCase());
  });

  return searchedFilterTodo;
});

const handleSelectFilter = (filterName: FilterNames) => {
  selectedFilter.value = filterName;
};

const onDelete = async (id: any) => {
  console.log("id :", id);
  const delted = await deleteTodo(id);
  console.log("delted :", delted);
  await getTodos();
  return delted;
};

onMounted(async () => {
  const fetchedTodos = await getTodos();
  todos.value = fetchedTodos;
});

// const handleChange = (value) => {
//   console.log("value :", value);
// };
</script>

<template>
  <div class="flex-col-center gap-10 text-center p-2">
    <AppHeader title="Vuejs Todo List App" />

    <!-- <SearchTodos label="Username" id="username" :handleChange="handleChange" /> -->
    <SearchTodos label="Username" id="username" v-model="searchedTodo" />

    <button
      class="btn w-[15rem]"
      @click="
        router.push({
          name: 'todo.create',
          query: { from: 'create' },
        } as RouteLocationNamedRaw)
      "
    >
      create todo
    </button>

    <FilterTodos @handleSelectFilter="handleSelectFilter" />

    <div
      class="flex-col-center !justify-start h-[35rem] gap-5 overflow-auto p-4"
    >
      <div
        v-if="filteredTodos.length"
        v-for="todo in filteredTodos"
        :key="todo.id"
        class="w-[25rem] border border-primary-200 rounded-md p-3 cursor-pointer"
      >
        <TodoItem :todo="todo" @onDelete="onDelete" />
      </div>
    </div>

    <AppFooter />
  </div>
</template>
