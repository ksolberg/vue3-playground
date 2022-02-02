<template>
  <div class="h-full">
    <div class="flex space-x-4 border-b">
      <router-link class="inline-flex py-1 px-3" to="/">Home</router-link>
      <router-link class="inline-flex py-1 px-3" to="/posts">Posts</router-link>
      <router-link class="inline-flex py-1 px-3" to="/store">Store</router-link>
      <router-link class="inline-flex py-1 px-3" to="/router"
        >Router</router-link
      >
      <button @click="toggle">{{ isDark ? "Light" : "Dark" }}</button>
    </div>
    <div class="p-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
// https://github.com/vueuse/head
import { useHead } from "@vueuse/head";
import { ref, computed } from "vue";

const isDark = ref(true);

useHead({
  htmlAttrs: {
    class: computed(() => (isDark.value ? "dark" : "")),
  },
  bodyAttrs: {
    class: "dark:bg-slate-900 dark:text-white",
  },
});

const toggle = () => {
  isDark.value = !isDark.value;
};
</script>

<style>
html,
body {
  @apply h-full;
}
</style>
