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
  { path: "/posts/:postId", component: Posts, props: true },
  { path: "/store", component: Store },
  { path: "/router", component: Router },
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
