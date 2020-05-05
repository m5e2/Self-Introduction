<template>
  <v-app dark>
    <v-navigation-drawer
      class="drawer"
      v-if="isShowNavDrawer"
      v-model="isShowNavDrawer"
      fixed
      temporary
    >
      <v-list dense>
        <v-list-item
          href="#profile"
          @click.stop="isShowNavDrawer = !isShowNavDrawer"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-box-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          href="#currentWork"
          @click.stop="isShowNavDrawer = !isShowNavDrawer"
        >
          <v-list-item-icon>
            <v-icon>mdi-svg</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Current Work Content</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          href="#skill"
          @click.stop="isShowNavDrawer = !isShowNavDrawer"
        >
          <v-list-item-icon>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Skill</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          href="#works"
          @click.stop="isShowNavDrawer = !isShowNavDrawer"
        >
          <v-list-item-icon>
            <v-icon>mdi-monitor</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Works</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon
        v-if="!isShowDefaultNavBar"
        @click.stop="isShowNavDrawer = !isShowNavDrawer"
      ></v-app-bar-nav-icon>

      <div v-if="isShowDefaultNavBar">
        <v-row align="center" cols="12">
          <v-col cols="2" md="2" sm="2">
            <nuxt-link class="nuxtlink" v-scroll-to="'#top'" to>
              <v-btn text rounded>
                <v-icon>mdi-home</v-icon>
                TOP
              </v-btn>
            </nuxt-link>
          </v-col>
          <v-col cols="2" md="2" sm="2">
            <nuxt-link class="nuxtlink" v-scroll-to="'#profile'" to>
              <v-btn text>
                <v-icon>mdi-account-box-outline</v-icon>
                profile
              </v-btn>
            </nuxt-link>
          </v-col>
          <v-col cols="4" md="4" sm="4">
            <nuxt-link class="nuxtlink" v-scroll-to="'#currentWork'" to>
              <v-btn text>
                <v-icon>mdi-svg</v-icon>
                Current work content
              </v-btn>
            </nuxt-link>
          </v-col>
          <v-col cols="2" md="2" sm="2">
            <nuxt-link class="nuxtlink" v-scroll-to="'#skill'" to>
              <v-btn text>
                <v-icon>mdi-format-list-bulleted</v-icon>
                skill
              </v-btn>
            </nuxt-link>
          </v-col>
          <v-col cols="2" md="2" sm="2">
            <nuxt-link class="nuxtlink" v-scroll-to="'#works'" to>
              <v-btn text> <v-icon>mdi-monitor</v-icon>works </v-btn>
            </nuxt-link>
          </v-col>
        </v-row>
      </div>
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
      isShowDefaultNavBar: true,
      isShowNavDrawer: null,
    };
  },
  mounted() {
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.isShowDefaultNavBar = 800 < window.innerWidth;
    },
  },
  created() {
    if (process.browser) window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    if (process.browser) window.addEventListener("resize", this.handleResize);
  },
};
</script>
<style scoped>
.nuxtlink {
  /* R G B A(透過) */
  color: rgba(0, 0, 0, 0.3);
}

.drawer {
  top: 0;
  right: 0;
}

/* @media screen and (max-width: 800px) {
} */
</style>
