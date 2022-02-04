import {
  createRouter,
  RouteRecordRaw,
  RouterOptions,
  createWebHashHistory,
} from "vue-router";

import Home from "@/pages/Home.vue";
import Posts from "@/pages/Posts.vue";
import Store from "@/pages/Store.vue";
import Router from "@/pages/Router.vue";
import VueUse from "@/pages/VueUse.vue";
import I18n from "@/pages/I18n.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/posts", component: Posts },
  { path: "/posts/:postId", component: Posts, props: route => ({ postId: parseInt(route.params.postId as string) }) },
  { path: "/store", component: Store },
  { path: "/router", component: Router },
  { path: "/vueuse", component: VueUse },
  { path: "/i18n", component: I18n },
];

const routerOptions: RouterOptions = {
  history: createWebHashHistory(),
  routes: routes,
};

const router = createRouter(routerOptions);

router.afterEach((to, from, failure) => {
  console.log("Entered route: " + to.path);
});

export default router;
