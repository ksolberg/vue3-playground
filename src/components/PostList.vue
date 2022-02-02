<script setup lang="ts">
import { $fetch } from "ohmyfetch";
const posts = await $fetch<Post[]>(
  "https://jsonplaceholder.typicode.com/posts"
);
</script>

<template>
  <ul class="flex flex-col space-y-4">
    <li v-for="post in posts">
      {{ post.title }}
    </li>
  </ul>  

</template>
