import { createI18n } from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "Hello!",
    },
  },
  no: {
    message: {
      hello: "Hei!",
    },
  },
};

const i18n = createI18n({
  locale: "no",
  fallback: "en",
  globalInjection: true,
  messages,
});

export default i18n;
