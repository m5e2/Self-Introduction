<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-row align="center" cols="12">
        <v-col cols="3">
          <v-btn text rounded :href="top">
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn text>
            <v-icon>mdi-account-box-outline</v-icon>profile
          </v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn text>
            <v-icon>mdi-format-list-bulleted</v-icon>skill
          </v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn text>
            <v-icon>mdi-monitor</v-icon>works
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      top: "/",
      clipped: false,
      drawer: false,
      fixed: false
    };
  }
};
</script>
<style scoped>
</style>>
