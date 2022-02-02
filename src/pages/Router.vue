<template>
  <div class="mt-2 flex space-x-2">
    <button @click.prevent="getRoutes">getRoutes</button>
    <button @click.prevent="currentRoute">currentRoute</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
// const { isReady } = router;

const getRoutes = () => {
  const routes = router.getRoutes();
  console.log(routes);
};

const currentRoute = () => {
  console.log(router.currentRoute.value); // remember .value
};

</script>

<style scoped>
button {
  @apply border py-1 px-3;
}
</style>
