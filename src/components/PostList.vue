<script setup lang="ts">
import { $fetch } from "ohmyfetch";
const posts = await $fetch<Post[]>(
  "https://jsonplaceholder.typicode.com/posts"
);
</script>

<template>
  <ul class="flex flex-col space-y-2">
    <li v-for="post in posts">
      <router-link class="hover:underline" :to="`/posts/${post.id}`">{{ post.title }}</router-link>
    </li>
  </ul>
</template>

<style scoped>
.router-link-active {
  @apply underline;
}
</style>
