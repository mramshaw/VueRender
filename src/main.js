import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faBurn,
  faEnvelope,
  faList,
  faListUl,
  faRandom,
  faStar,
  faTrash,
  faUndo
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBurn,
  faEnvelope,
  faList,
  faListUl,
  faRandom,
  faStar,
  faTrash,
  faUndo
);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
