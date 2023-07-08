import "./bootstrap";
import { createApp } from "vue";

import AppLayout from "./layout/AppLayout.vue";

// Vuetify
// import "vuetify/styles";
// import { createVuetify } from "vuetify";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";

// const vuetify = createVuetify({
//     components,
//     directives,
// });

const app = createApp(AppLayout);

// app.use(vuetify);

app.mount("#app");
