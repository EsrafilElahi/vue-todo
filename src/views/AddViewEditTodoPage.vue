<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter, useRoute, type RouteLocationNamedRaw } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
import type {
  PriorityOption,
  QueryFrom,
  QueryFromType,
  Todo,
} from "../types/allTypes";
import { createTodo, getTodo, updateTodo } from "../api/todosApi";
const router = useRouter();
const route = useRoute();

const priorityOptions = ref<PriorityOption[]>([
  { id: 1, label: "Low", value: "low" },
  { id: 2, label: "Mid", value: "mid" },
  { id: 3, label: "High", value: "high" },
]);

const queryFrom: QueryFrom = {
  create: "Create",
  view: "View",
  edit: "Edit",
};

const fromQuery = route.query.from as QueryFromType;
const queryFromText = queryFrom[fromQuery];

const todoData = ref<Omit<Todo, "id">>({
  title: "",
  priority: "",
  done: false,
});

const handleSubmit = async () => {
  const id = route.params.todoId;
  const payload = { ...todoData.value };

  if (queryFromText === "Create") {
    return await createTodo(payload).then(() => {
      return router.push({ name: "todos" });
    });
  } else if (queryFromText === "Edit") {
    return await updateTodo(id, payload).then(() => {
      return router.push({ name: "todos" });
    });
  } else {
    return router.push({ name: "todos" });
  }
};

onMounted(async () => {
  if (queryFromText !== "Create") {
    const res = await getTodo(route.params.todoId);
    todoData.value = res;
  }
});
</script>

<template>
  <div class="flex-col-center gap-10 text-center p-2 max-w-[40rem] mx-auto">
    <AppHeader :title="`${queryFromText} Todo ${$route.params.todoId || ''}`" />

    <div class="w-full flex-col-center gap-2">
      <label for="title">title</label>
      <input
        :disabled="queryFromText === 'View'"
        v-model="todoData.title"
        class="border rounded p-2"
        name="title"
        placeholder="edit task"
      />
    </div>

    <div class="w-full flex-col-center gap-2">
      <label for="priority">priority</label>
      <select
        :disabled="queryFromText === 'View'"
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
      <label for="done">done</label>
      <input
        :disabled="queryFromText === 'View'"
        v-model="todoData.done"
        name="done"
        type="checkbox"
      />
    </div>

    <div class="flex-center gap-4">
      <button @click="handleSubmit" class="btn">{{ route.query.from }}</button>
      <button
        class="btn"
        @click="router.push({ name: 'todos' } as RouteLocationNamedRaw)"
      >
        back
      </button>
    </div>
  </div>
</template>
