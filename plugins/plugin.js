import Vue from "vue";
import VueScrollto from "vue-scrollto";

Vue.use(VueScrollto, {
  duration: 700,
  easing: [0, 0, 0.1, 1],
  offset: -100,
});
