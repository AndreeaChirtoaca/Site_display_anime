import Vue from "vue";
import VueRouter from "vue-router";
import "../public/reset.css";
import App from "./App.vue";
import HomePage from "./HomePage";
import MostPopular from "./MostPopular";
import Newest from "./Newest";
import RecentlyUpdated from "./RecentlyUpdated";
import SearchPage from "./SearchPage";
import ShowPage from "./ShowPage";
import BrowsePage from "./BrowsePage";

import store from "./store/store";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage },
  { path: "/MostPopular", component: MostPopular },
  { path: "/Newest", component: Newest },
  { path: "/RecentlyUpdated", component: RecentlyUpdated },
  { path: "/SearchPage", component: SearchPage },
  { path: "/ShowPage/:id", component: ShowPage },
  { path: "/BrowsePage", component: BrowsePage }
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

new Vue({
  render: (h) => h(App),
  router: router,
  store: store
}).$mount("#app");
