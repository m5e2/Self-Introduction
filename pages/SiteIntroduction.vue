<template>
  <v-layout>
    <v-content
      >このサイトは Nuxt.js と Vuetify.js という CSS
      フレームワークによって構成されています。
    </v-content>
    <v-btn class="backButton" color="primary" :to="topPage"
      >TOP画面に戻る</v-btn
    >
  </v-layout>
</template>
<script>
export default {
  data() {
    return { topPage: "/" };
  },
  methods: {},
};
</script>

<style scoped>
.backButton {
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
