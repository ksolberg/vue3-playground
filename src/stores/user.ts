import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      name: "User name",
    };
  }
});
