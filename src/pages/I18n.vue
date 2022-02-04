<template>
  <div class="mt-2 flex space-x-2">
    <button @click.prevent="setLocale('en')" :class="{ 'underline': global.locale === 'en'}">English</button>
    <button @click.prevent="setLocale('no')" :class="{ 'underline': global.locale === 'no'}">Norsk</button>
  </div>
  <div class="text-3xl mt-4">
    {{ $t("message.hello") }}
  </div>
</template>

<script setup lang="ts">
import i18n from "@/i18n";

const { global } = i18n;

const setLocale = (locale : 'no' | 'en') => {
  global.locale = locale;
};
</script>
