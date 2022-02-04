<template>
  <p class="text-gray-500 mb-4">Async component and conditionally loading data.</p>
  <div class="flex space-x-10">
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
      <div class="fixed pr-3">
        <PostItem v-if="post" :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
import { $fetch } from "ohmyfetch";
import { defineProps, computed, watch, ref } from "vue";
const props = defineProps<{
  postId?: number;
}>();

const post = ref<Post>();
const postId = computed(() => props.postId); // for the watch

watch(postId, (val) => {
  if (val) {
    $fetch<Post>(`https://jsonplaceholder.typicode.com/posts/${val}`).then(
      (res) => {
        post.value = res;
      }
    );
  }
});
</script>
