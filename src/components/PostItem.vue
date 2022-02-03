<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  post: Post;
}>();
</script>

<template>
  <article>
    <h1 class="text-lg font-semibold">{{ post.title }}</h1>
    <div class="text-sm mt-1">{{ post.body }}</div>
  </article>
</template>
