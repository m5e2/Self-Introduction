<template>
  <v-container>
    <v-row>
      <div class="image-container display-2">
        <img class="image" src="../images/top-image.jpg" />
        <p class="font-italic font-weight-bold">m5e2's Portfolio</p>
      </div>
      <v-col class="text-center">
        <v-card class="profile">
          <h1 class="font-italic font-weight-bold">Profile</h1>
          <v-list shaped>
            <v-list-item v-for="(list, i) in profileLists" :key="i">
              <v-list-item-content>{{ list.value }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col class="text-center" cols="12">
        <v-card class="skill">
          <h1 class="font-italic font-weight-bold">Skill</h1>
          <v-row cols="12">
            <v-col class="text-center" cols="4">
              <p class="text-left">{{ COLUM_LANG_TITLE }}</p>
              <p />
              <v-list shaped>
                <v-list-item v-for="(lang, i) in Languages" :key="i">
                  <v-list-item-content>{{ lang.name }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col class="text-center" cols="4">
              <p class="text-left">{{ COLUM_FW_LIB_TITLE }}</p>
              <p />
              <v-list shaped>
                <v-list-item v-for="(fw_lib, i) in framework_library" :key="i">
                  <v-list-item-content>{{ fw_lib.name }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
            <v-col class="text-center" cols="4">
              <p class="text-left">{{ COLUM_TOOL_TITLE }}</p>
              <p />
              <v-list shaped>
                <v-list-item v-for="(other, i) in others" :key="i">
                  <v-list-item-content>{{ other.name }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="text-center" cols="12">
        <v-card class="work">
          <h1 class="font-italic font-weight-bold">Works</h1>
          <v-row cols="12">
            <v-col cols="4">
              <v-list-item-content>
                <h3>イベント時出席者登録アプリ</h3>
                <h4>Java, Gradle, Tymeleaf, nginx</h4>
                <a href="https://github.com/m5e/Acceptance-confirmation">Github</a>
              </v-list-item-content>
            </v-col>
            <v-col cols="4">
              <v-list-item-content>
                <h3>ルーレット</h3>
                <h4>Jquery</h4>
                <a href="https://github.com/m5e/Practice-Roulette-Machine">Github</a>
              </v-list-item-content>
            </v-col>
            <v-col cols="4">
              <v-list-item-content>
                <h3>定期外交通費申請アプリ</h3>
                <h3>( 製作途中 )</h3>
                <h4>Nuxt.js, bulma</h4>
                <a href="https://github.com/m5e/Acceptance-confirmation">Github</a>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      COLUM_LANG_TITLE: "言語",
      COLUM_FW_LIB_TITLE: "フレームワークやライブラリ",
      COLUM_TOOL_TITLE: "その他 ( IDE やツールなど )",
      profileLists: [
        { value: "出身： 宮城県" },
        { value: "IT 業界歴： 約 5 年 ( 4 年 9 か月 )" },
        { value: "フロントエンドエンジニア歴： 2 年 3 か月" },
        {
          value:
            "経歴： 大学卒業後、物流系の会社に入社し、フォークリフトに乗りつつ1年ほど倉庫内業務を行っていました。その後、現職のSES企業に入社し、現在はフロントエンドエンジニアとして開発支援作業を行っています。"
        }
      ],
      Languages: [
        { name: "HTML" },
        { name: "CSS ( CSS, Less )" },
        { name: "Javascript" },
        { name: "Java" },
        { name: "bash" }
      ],
      framework_library: [
        { name: "jQuery" },
        { name: "Vue.js" },
        { name: "Typescript" },
        { name: "React" },
        { name: "Bootstrap" },
        { name: "Vuetify.js" },
        { name: "bulma" },
        { name: "SpringBoot" }
      ],
      others: [
        { name: "Eclipse" },
        { name: "VSCode" },
        { name: "Github" },
        { name: "Redmine" },
        { name: "trac" },
        { name: "TortoiseSVN" },
        { name: "jenkins" },
        { name: "AWS" }
      ]
    };
  }
};
</script>
<style scoped>
.image-container {
  position: relative;
}
.image-container p {
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.image {
  width: 100%;
  height: 100%;
}
.profile,
.skill,
.work {
  padding-top: 1%;
  padding-bottom: 1%;
}
.work {
}
</style>
