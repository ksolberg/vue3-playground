<template>
  <div class="text-3xl">
    Count: {{ count }}, Double count: {{ doubleCount }}, message: {{ message }}
  </div>
  <div class="mt-2 flex space-x-2">
    <button @click.prevent="incState">state</button>
    <button @click.prevent="incAction">action</button>
    <button @click.prevent="resetStore">$reset</button>
    <button @click.prevent="patchStore">$patch</button>
    <button @click.prevent="replaceStore">$state (replace state)</button>
    <button @click.prevent="asyncAction">async</button>
    <button @click.prevent="throwAction">throw</button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../stores/main";
import { storeToRefs } from "pinia";

const store = useStore();

const { count, doubleCount, message } = storeToRefs(store);

const resetStore = () => {
  store.$reset();
};

const incState = () => {
  store.count += 1;
};

const incAction = () => {
  store.increment(2);
};

const patchStore = () => {
  store.$patch({
    count: store.count + 1,
    message: "New message!",
  });
};

const asyncAction = async () => {
  const username = await store.asyncAction();
  store.message = "Async get name from user store: " + username;
};

store.$subscribe((mutation, state) => {
  console.log("mutation.type", mutation.type);
  console.log("mutation.storeId", mutation.storeId);
  console.log("state", state);
  //console.log('mutation.payload', mutation.events) // payload??

  // persist the whole state to the local storage whenever it changes
  localStorage.setItem("main", JSON.stringify(state));
});

store.$onAction(
  ({
    name, // name of the action
    store, // store instance, same as `someStore`
    args, // array of parameters passed to the action
    after, // hook after the action returns or resolves
    onError, // hook if the action throws or rejects
  }) => {
    const startTime = Date.now()
    // this will trigger before an action on `store` is executed
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // this will trigger if the action succeeds and after it has fully run.
    // it waits for any returned promised
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // this will trigger if the action throws or returns a promise that rejects
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
);

const throwAction = () => {
  store.throwAction();
};

const replaceStore = () => {
  store.$state = {
    count: 100,
    message: "Replaced message!",
  };
};
</script>

<style scoped>
button {
  @apply border py-1 px-3;
}
</style>
