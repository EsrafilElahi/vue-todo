<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'notFound' }">notFound</RouterLink> |
    <RouterLink :to="{ name: 'todos' }">todos</RouterLink>
  </nav>

  <RouterView />
</template>
