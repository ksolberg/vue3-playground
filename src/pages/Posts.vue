<template>
  <div class="flex">
    <div class="w-1/2">
      <Suspense>
        <template #default>
          <PostList />
        </template>
        <template #fallback>
          <div>Loading ...</div>
        </template>
      </Suspense>
    </div>
    <div class="w-1/2">
      <Suspense>
        <template #default>
          <PostItem />
        </template>
        <template #fallback>
          <div>Loading ...</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
import { defineProps } from "vue";
defineProps<{
  postId?: number;
}>();
</script>
