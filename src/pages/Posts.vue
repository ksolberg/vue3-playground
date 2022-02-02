<template>
  <Suspense>
    <template #default>
      <PostList />
    </template>
    <template #fallback>
      <div>Loading ...</div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import PostList from "../components/PostList.vue";
</script>