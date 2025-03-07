<script setup lang="ts">
const emit = defineEmits(["handleSelectFilter"]);
</script>

<template>
  <div class="flex-center gap-3">
    <h2>Filters :</h2>
    <div class="flex-center gap-3">
      <button class="btn" @click="emit('handleSelectFilter', 'all')">
        All
      </button>
      <button class="btn" @click="emit('handleSelectFilter', 'low')">
        Low
      </button>
      <button class="btn" @click="emit('handleSelectFilter', 'high')">
        High
      </button>
      <button class="btn" @click="emit('handleSelectFilter', 'done')">
        Done
      </button>
    </div>
  </div>
</template>
