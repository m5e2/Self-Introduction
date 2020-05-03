<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-row align="center" cols="12">
        <v-col cols="2">
          <nuxt-link class="nuxtlink" v-scroll-to="'#top'" to>
            <v-btn text rounded>
              <v-icon>mdi-home</v-icon>
              TOP
            </v-btn>
          </nuxt-link>
        </v-col>
        <v-col cols="2">
          <nuxt-link class="nuxtlink" v-scroll-to="'#profile'" to>
            <v-btn text>
              <v-icon>mdi-account-box-outline</v-icon>
              profile
            </v-btn>
          </nuxt-link>
        </v-col>
        <v-col cols="4">
          <nuxt-link class="nuxtlink" v-scroll-to="'#currentWork'" to>
            <v-btn text>
              <v-icon>mdi-svg</v-icon>
              Current work content
            </v-btn>
          </nuxt-link>
        </v-col>
        <v-col cols="2">
          <nuxt-link class="nuxtlink" v-scroll-to="'#skill'" to>
            <v-btn text>
              <v-icon>mdi-format-list-bulleted</v-icon>
              skill
            </v-btn>
          </nuxt-link>
        </v-col>
        <v-col cols="2">
          <nuxt-link class="nuxtlink" v-scroll-to="'#works'" to>
            <v-btn text> <v-icon>mdi-monitor</v-icon>works </v-btn>
          </nuxt-link>
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
      top: "https://m5e2.github.io/Self-Introduction/",
      clipped: false,
      drawer: false,
      fixed: false,
    };
  },
};
</script>
<style scoped>
.nuxtlink {
  /* R G B A(透過) */
  color: rgba(0, 0, 0, 0.3);
}
</style>
