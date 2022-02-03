<template>
  <div class="h-full">
    <div :class="`flex space-x-4 border-b fixed w-full ${darkClasses}`">
      <router-link class="inline-flex py-1 px-3" to="/">Home</router-link>
      <router-link class="inline-flex py-1 px-3" to="/posts">Posts</router-link>
      <router-link class="inline-flex py-1 px-3" to="/store">Store</router-link>
      <router-link class="inline-flex py-1 px-3" to="/router"
        >Router</router-link
      >
      <router-link class="inline-flex py-1 px-3" to="/vueuse"
        >VueUse</router-link
      >
      <button @click="toggle">{{ isDark ? "Light" : "Dark" }}</button>
    </div>
    <div class="p-3 pt-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
// https://github.com/vueuse/head
import { useHead } from "@vueuse/head";
import { ref, computed } from "vue";

const isDark = ref(true);

const darkClasses = "bg-white dark:bg-slate-900 dark:text-white";

useHead({
  title: "Some title",
  meta: [
    {
      name: "description",
      content: "Some description",
    },
  ],
  htmlAttrs: {
    class: computed(() => (isDark.value ? "dark" : "")),
  },
  bodyAttrs: {
    class: darkClasses,
  },
});

const toggle = () => {
  isDark.value = !isDark.value;
};
</script>

<!-- global styles -->
<style>
html,
body {
  @apply h-full;
}
</style>

<!-- local styles -->
<style scoped>
.router-link-active {
  @apply underline;
}
</style>
