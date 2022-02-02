import {
  createRouter,
  RouteRecordRaw,
  RouterOptions,
  createWebHashHistory,
} from "vue-router";

import Home from "../pages/Home.vue";
import Posts from "../pages/Posts.vue";
import Store from "../pages/Store.vue";
import Router from "../pages/Router.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/posts", component: Posts },
  { path: "/store", component: Store },
  { path: "/router", component: Router },
];

const routerOptions: RouterOptions = {
  history: createWebHashHistory(),
  routes: routes,
};

const router = createRouter(routerOptions);

export default router;
