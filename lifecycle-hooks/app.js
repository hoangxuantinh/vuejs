import MyComponent from "./MyComponent.js";
console.log("🚀 ~ MyComponent:", MyComponent);

const app = Vue.createApp({
  data() {
    return {
      message: "hello world",
    };
  },
  components: {
    MyComponent,
  },
}).mount("#app");

