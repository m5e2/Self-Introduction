<template>
  <v-container>
    <v-row>
      <v-col class="text-center" cols="12">
        <v-card class="profile">
          <h1>Profile</h1>
          <p>
            はじめまして。IT業界歴約 5 年、フロントエンドエンジニア 2 年目の
            m5e2 と申します。
          </p>
          <p>
            新卒時代は物流業界、その後転職し中小企業のSES企業に入社しました。
          </p>
          <p>
            転職後は大手企業向けのパッケージ会社で品質保証のテストを行ったり、
          </p>
          <p>
            現在の業務であるローコードな画面開発システムの開発支援を行っています。
          </p>
          <p>
            現場先での開発支援業務に加え、プライベートでのプログラミングを行っていくうちに、
          </p>
          <p>
            もっと開発業務に携わりたいという気持ちが強くなり、転職を意識するようになりました。
          </p>
        </v-card></v-col
      >
      <v-col class="text-center" cols="12">
        <v-card class="skill">
          <h1>Skill</h1>
          <p>簡易的なアプリの作成ができます。</p>
          <p>
            また、Vue.js や Typescript
            は現在の業務で使用しているので基本的な構文を書くことができます。
          </p>
          <v-container>
            <v-row>
              <v-col cols="4">
                <h3>Javascript</h3>
                <p>経験年数：4 年 9 ヶ月</p>
              </v-col>
              <v-col cols="4">
                <h3>JQuery</h3>
                <p>経験年数：3 年</p>
              </v-col>
              <v-col cols="4"
                ><h3>Vue.js</h3>
                <p>経験年数：2 年 3 ヶ月</p>
              </v-col>
              <v-col cols="4"
                ><h3>Typescript</h3>
                <p>経験年数：2 年 3 ヶ月</p>
              </v-col>
              <v-col cols="4"
                ><h3>Node.js</h3>
                <p>経験年数：2 年 3 ヶ月</p>
              </v-col>
              <v-col cols="4">
                <h3>React</h3>
                <p>経験年数：2 年 6 ヶ月</p>
              </v-col>
              <v-col cols="4">
                <h3>Java</h3>
                <p>経験年数：1 年 5 ヶ 月</p>
              </v-col>
              <v-col cols="4">
                <h3>bash</h3>
                <p>経験年数：1 年 2 ヶ 月</p>
              </v-col>
              <v-col cols="4">
                <h3>HTML</h3>
                <p>経験年数：4 年 9 ヶ 月</p>
              </v-col>
              <v-col cols="4">
                <h3>CSS ( css, less )</h3>
                <p>経験年数：2 年 3 ヶ 月</p>
              </v-col>
              <v-col cols="4">
                <h3>Oracle</h3>
                <p>経験年数：2 年 3 ヶ 月</p>
              </v-col>
              <v-col cols="4">
                <h3>PostgreSQL</h3>
                <p>経験年数：2 年 3 ヶ 月</p>
              </v-col>
              <v-col cols="4">
                <h3>Github</h3>
                <p>経験年数：2 年 3 ヶ 月</p>
              </v-col>
              <v-col cols="4">
                <h3>使ったことのある</h3>
                <h3>CSS フレームワーク</h3>
                <p>Bootstrap, Vuetify.js, bulma</p>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col class="text-center" cols="12">
        <v-card class="work">
          <h1>Works</h1>
          <v-container>
            <v-row>
              <v-col cols="4">
                <h3>ポートフォリオ</h3>
                <a href="https://github.com/m5e2/Self-Introduction">Github</a>
              </v-col>
              <v-col cols="4">
                <h3>イベント時の出欠者登録アプリ</h3>
                <a href="https://github.com/m5e/Acceptance-confirmation"
                  >Github</a
                >
              </v-col>
              <v-col cols="4">
                <h3>ルーレット</h3>
                <a href="https://github.com/m5e/Practice-Roulette-Machine"
                  >Github</a
                >
              </v-col>
              <v-col cols="4">
                <h3>定期外交通費申請アプリ</h3>
                <h4>( 製作途中 )</h4>
                <a href="https://github.com/m5e/transportation-expenses"
                  >Github</a
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
};
</script>
<style scoped>
.profile,
.skill,
.work {
  padding-top: 1%;
  padding-bottom: 1%;
}
</style>
