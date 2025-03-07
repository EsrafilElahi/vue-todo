<script setup lang="ts">
import { defineProps, useAttrs, defineEmits, defineModel } from "vue";
// import type { TypeEmit } from "../types/allTypes.ts";
const attrs = useAttrs();

interface BaseInputProps {
  label: string;
  id: string;
  // handleChange: (e) => void;  ---> without v-model
  modelValue: string;
}

export interface TypeEmit {
  (e: "update:modelValue", value: string): void;
}

const model = defineModel()

const props = defineProps<BaseInputProps>();

const emit = defineEmits<TypeEmit>();
</script>

<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      v-bind="$attrs"
      :id="id"
      class="border rounded p-2 ml-3"
      :value="modelValue"
      @input="(e) => emit('update:modelValue', e.target.value)"
    />
  </div>
</template>
