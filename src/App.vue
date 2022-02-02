<template>
  <div class="dark h-screen">
    <div class="dark:bg-slate-900 dark:text-white h-screen">
      <div class="flex space-x-4 border-b">
        <router-link class="inline-flex py-1 px-2" to="/">Home</router-link>
        <router-link class="inline-flex py-1 px-2" to="/posts"
          >Posts</router-link
        >
        <router-link class="inline-flex py-1 px-3" to="/store"
          >Store</router-link>
          <router-link class="inline-flex py-1 px-3" to="/router"
          >Router</router-link>
      </div>
      <div class="p-3">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
  @apply h-full;
}
</style>
