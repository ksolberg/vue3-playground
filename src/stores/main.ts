import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useStore = defineStore("main", {
  state: () => {
    return {
      message: "Welcome",
      count: 0,
    };
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment(amount: number = 1) {
      this.count += amount;
    },
    async asyncAction(): Promise<string> {
      const user = useUserStore(); // user other store in actions (and getters)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(user.name);
        }, 1000);
      });
    },
    throwAction() {
      throw new Error("This action threw, uuu...");
    },
  },
});

