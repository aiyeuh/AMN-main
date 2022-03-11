import Vue from "vue";
//import Login from "./pages/Login.vue";
import router from "./router.js";
import Dashboard from "./pages/Dashboard.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueApexCharts from "vue-apexcharts";

Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(Dashboard),
}).$mount("#app");
