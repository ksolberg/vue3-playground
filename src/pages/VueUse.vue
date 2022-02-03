<template>

<div>

  <OnClickOutside @trigger="outsideClicked">
    <div>Hello</div>
  </OnClickOutside>
  <div>Outside</div>
</div>

</template>

<script setup lang="ts">
import { OnClickOutside } from "@vueuse/components";

const outsideClicked = () => {
  console.log('Clicked outside');
}

</script>
