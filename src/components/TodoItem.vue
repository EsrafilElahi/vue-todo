<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { PencilIcon, TrashIcon } from "@heroicons/vue/24/solid";
import type { Todo } from "../types/allTypes.ts";
import type { RouteLocationNamedRaw } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps<{
  todo: Todo;
}>();

const emit = defineEmits(["onDelete", "onEdit"]);
</script>

<template>
  <div
    class="flex justify-between items-center"
    @click.self.prevent="
      router.push({
        name: 'todo.view',
        query: { from: 'view' },
      } as RouteLocationNamedRaw)
    "
  >
    <p class="text-secondary-300">{{ todo.title }}</p>
    <div class="flex gap-5">
      <input type="checkbox" v-model="todo.done" class="mr-4" />
      <PencilIcon
        class="icon"
        @click.stop="
          router.push({
            name: 'todo.edit',
            params: { todoId: todo.id },
            query: { from: 'edit' },
          } as RouteLocationNamedRaw)
        "
      />
      <TrashIcon
        class="icon !text-secondary-300"
        @click.stop.prevent="emit('onDelete', todo.id)"
      />
    </div>
  </div>
</template>