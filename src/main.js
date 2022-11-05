import { createApp } from "vue";
import PolarisVue from "@ownego/polaris-vue"; // (✓)
import "@ownego/polaris-vue/dist/style.css"; // (✓) This will be deprecated in the future, right after Vue 3 supports css injections.
import "./styles/global.scss";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(PolarisVue); // (✓)
app.use(router);

app.mount("#app");
