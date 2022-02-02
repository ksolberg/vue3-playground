import { createApp } from "vue";
import router from "./router";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import "./index.css";

createApp(App).use(router).use(createPinia()).use(createHead()).mount("#app");
