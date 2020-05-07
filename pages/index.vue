<template>
  <v-container id="top">
    <v-row>
      <div class="image-container display-2">
        <img class="image" src="../images/top-image.jpg" />
        <p class="page-title font-italic font-weight-bold">Portfolio</p>
      </div>
      <v-col id="profile" class="text-center">
        <v-card class="profile">
          <h1 class="colum-title font-italic font-weight-bold">Profile</h1>
          <h4 class="colum-title-ja font-italic font-weight-bold">自己紹介</h4>
          <div class="profile-content">
            <v-list shaped>
              <v-list-item v-for="(list, i) in profileLists" :key="i">
                <v-list-item-content class="text-sm-left">{{ list.value }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-card>
      </v-col>
      <v-col id="currentWork" class="text-center" cols="12">
        <v-card class="currentWork">
          <h1 class="colum-title font-italic font-weight-bold">Current work content</h1>
          <h4 class="colum-title-ja font-italic font-weight-bold">現在の仕事内容</h4>
          <div class="currentWork-content">
            <v-row cols="12">
              <v-col cols="6">
                <h3 class="content-para">要件定義 ～ 詳細設計</h3>
                <p>新規機能の追加や仕様変更の要件を任されたときには要件の洗い出しを行ったり、どの実装方法であれば要件を満たせるかを考えて仕様検討案の作成を行ったりしています。</p>
              </v-col>
              <v-col cols="6">
                <h3 class="content-para">コーディング</h3>
                <p>
                  主に Vue.js や Typescript , jQuery
                  を使って実装を行っています。
                </p>
                <p>テストは jest を用いて行っています。</p>
              </v-col>
              <v-col cols="6">
                <h3 class="content-para">結合テスト</h3>
                <p>
                  リリース 1
                  ヶ月前くらいから所属しているプロジェクトの結合テストを行っています。
                </p>
                <p>この間に自分が担当した機能で不具合が発見された場合には不具合修正を行うこともあります。</p>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
      <v-col id="skill" class="text-center" cols="12">
        <v-card class="skill">
          <h1 class="colum-title font-italic font-weight-bold">Skill</h1>
          <h4 class="colum-title-ja">スキル</h4>
          <div class="skill-content">
            <v-row cols="12">
              <v-col class="text-center content-style" cols="6">
                <p class="text-center headline">{{ COLUM_LANG_TITLE }}</p>
                <p />
                <v-list shaped>
                  <v-list-item v-for="(lang, i) in Languages" :key="i">
                    <v-list-item-content>{{ lang.name }}</v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col class="text-center content-style" cols="6">
                <p class="text-center headline">{{ COLUM_FW_LIB_TITLE }}</p>
                <p />
                <v-list shaped>
                  <v-list-item v-for="(fw_lib, i) in framework_library" :key="i">
                    <v-list-item-content>{{ fw_lib.name }}</v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col class="text-center content-style" cols="6">
                <p class="text-center headline">{{ COLUM_TOOL_TITLE }}</p>
                <p />
                <v-list shaped>
                  <v-list-item v-for="(other, i) in others" :key="i">
                    <v-list-item-content>{{ other.name }}</v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col class="text-center content-style" cols="6">
                <p class="text-center headline">{{ COLUM_DB_TITLE }}</p>
                <p />
                <v-list shaped>
                  <v-list-item v-for="(d, i) in db" :key="i">
                    <v-list-item-content>{{ d.name }}</v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
      <v-col class="text-center" cols="12" id="works">
        <v-card class="work">
          <h1 class="colum-title font-italic font-weight-bold">Works</h1>
          <h4 class="colum-title-ja">製作物</h4>
          <div class="works-content">
            <v-row cols="12">
              <v-col class="content-style" cols="6">
                <v-list-item-content>
                  <h3>ポートフォリオ</h3>
                  <v-card-subtitle>Nuxt.js, Node.js, Vuetify.js</v-card-subtitle>
                  <a href="https://github.com/m5e2/Self-Introduction">Github</a>
                </v-list-item-content>
              </v-col>
              <v-col class="content-style" cols="6">
                <v-list-item-content>
                  <h3>イベント時出席者登録アプリ</h3>
                  <v-card-subtitle>Java, Gradle, Thymeleaf, nginx, H2DB</v-card-subtitle>
                  <a href="https://github.com/m5e/Acceptance-confirmation">Github</a>
                </v-list-item-content>
              </v-col>
              <v-col class="content-style" cols="6">
                <v-list-item-content>
                  <h3>ルーレット</h3>
                  <v-card-subtitle>jQuery</v-card-subtitle>
                  <a href="https://github.com/m5e/Practice-Roulette-Machine">Github</a>
                </v-list-item-content>
              </v-col>
              <v-col class="content-style" cols="6">
                <v-list-item-content>
                  <h3>スクレイピングを使ってブラウザからログイン</h3>
                  <v-card-subtitle>Node.js, Puppeteer</v-card-subtitle>
                  <a href="https://github.com/m5e/login_site">Github</a>
                </v-list-item-content>
              </v-col>
              <v-col class="content-style" cols="6">
                <v-list-item-content>
                  <h3>定期外交通費申請アプリ</h3>
                  <h3>( 製作途中 )</h3>
                  <v-card-subtitle>Nuxt.js, Node.js, bulma</v-card-subtitle>
                  <a href="https://github.com/m5e/transportation-expenses">Github</a>
                </v-list-item-content>
              </v-col>
            </v-row>
          </div>
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
      COLUM_DB_TITLE: "DB",
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
      db: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "H2 Database" },
        { name: "Oracle" }
      ],
      others: [
        { name: "Eclipse" },
        { name: "VSCode" },
        { name: "git" },
        { name: "Github" },
        { name: "SourceTree" },
        { name: "TortoiseSVN" },
        { name: "Thymeleaf" },
        { name: "Redmine" },
        { name: "trac" },
        { name: "jenkins" },
        { name: "Apache" },
        { name: "AWS" }
      ]
    };
  },
  mounted() {
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      const observer = new IntersectionObserver(entries => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("scrollin");
        }
      });

      observer.observe(this.$el.querySelector(".profile-content"));
      observer.observe(this.$el.querySelector(".currentWork-content"));
      observer.observe(this.$el.querySelector(".skill-content"));
      observer.observe(this.$el.querySelector(".works-content"));
    }
  },
  created() {
    if (process.browser) window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    if (process.browser)
      window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style scoped>
.page-title {
  font-family: "Kaushan-Script", cursive;
}

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
  padding-bottom: 2%;
}

.colum-title {
  font-family: "Kaushan-Script", cursive;
}

.colum-title-ja {
  padding-bottom: 5%;
}

.content-para {
  padding-bottom: 7%;
}

.content-style {
  border: thick double;
}

.profile-content,
.currentWork-content,
.skill-content,
.works-content {
  opacity: 0.1;
  transform: translate(0, 50px);
  transition: all 600ms;
}

.profile-content.scrollin,
.currentWork-content.scrollin,
.skill-content.scrollin,
.works-content.scrollin {
  opacity: 1;
  transform: translate(0, 0);
}

.col-6 {
  max-width: 48%;
}

.row {
  padding-left: 4%;
}
</style>
