<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { PencilIcon, TrashIcon } from "@heroicons/vue/24/solid";
import type { Todo } from "../types/allTypes.ts";

const props = defineProps<{
  todo: Todo;
}>();

const emit = defineEmits(["onDelete", "onEdit"]);
</script>

<template>
  <div class="flex justify-between items-center">
    <p class="text-secondary-300">{{ todo.title }}</p>
    <div class="flex gap-5">
      <input type="checkbox" v-model="todo.done" class="mr-4" />
      <PencilIcon class="icon" />
      <TrashIcon
        class="icon !text-secondary-300"
        @click="emit('onDelete', todo.id)"
      />
    </div>
  </div>
</template>
