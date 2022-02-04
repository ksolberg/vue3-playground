import { createApp } from "vue";
import router from "./router";
import i18n from "./i18n";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import "./index.css";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(i18n)
  .use(createHead())
  .mount("#app");
