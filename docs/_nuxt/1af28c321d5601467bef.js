(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{275:function(t,e,n){var content=n(286);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("6e28a376",content,!0,{sourceMap:!1})},284:function(t,e,n){t.exports=n.p+"img/5146c13.jpg"},285:function(t,e,n){"use strict";var o=n(275);n.n(o).a},286:function(t,e,n){(e=n(14)(!1)).push([t.i,".page-title[data-v-e943a450]{font-family:Kaushan-Script,cursive}.image-container[data-v-e943a450]{position:relative}.image-container p[data-v-e943a450]{position:absolute;top:58%;left:50%;transform:translate(-50%,-50%)}.image[data-v-e943a450]{width:100%;height:100%}.profile[data-v-e943a450],.skill[data-v-e943a450],.work[data-v-e943a450]{padding-top:1%;padding-bottom:2%}.colum-title[data-v-e943a450]{font-family:Kaushan-Script,cursive}.colum-title-ja[data-v-e943a450]{padding-bottom:5%}.content-para[data-v-e943a450]{padding-bottom:7%}.content-style[data-v-e943a450]{border:thick double}.currentWork-content[data-v-e943a450],.profile-content[data-v-e943a450],.skill-content[data-v-e943a450],.works-content[data-v-e943a450]{opacity:.1;transform:translateY(50px);transition:all .6s}.currentWork-content.scrollin[data-v-e943a450],.profile-content.scrollin[data-v-e943a450],.skill-content.scrollin[data-v-e943a450],.works-content.scrollin[data-v-e943a450]{opacity:1;transform:translate(0)}.col-6[data-v-e943a450]{max-width:48%}.row[data-v-e943a450]{padding-left:4%}",""]),t.exports=e},303:function(t,e,n){"use strict";n.r(e);n(6),n(44),n(7),n(31),n(45),n(26),n(16),n(17),n(4);function o(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))){var i=0,e=function(){};return{s:e,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,l=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw o}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={components:{},data:function(){return{COLUM_LANG_TITLE:"言語",COLUM_FW_LIB_TITLE:"フレームワークやライブラリ",COLUM_DB_TITLE:"DB",COLUM_TOOL_TITLE:"その他 ( IDE やツールなど )",profileLists:[{value:"出身： 宮城県"},{value:"IT 業界歴： 約 5 年 ( 4 年 9 か月 )"},{value:"フロントエンドエンジニア歴： 2 年 3 か月"},{value:"経歴： 大学卒業後、物流系の会社に入社し、フォークリフトに乗りつつ1年ほど倉庫内業務を行っていました。その後、現職のSES企業に入社し、現在はフロントエンドエンジニアとして開発支援作業を行っています。"}],Languages:[{name:"HTML"},{name:"CSS ( CSS, Less )"},{name:"Javascript"},{name:"Java"},{name:"bash"}],framework_library:[{name:"jQuery"},{name:"Vue.js"},{name:"Typescript"},{name:"React"},{name:"Bootstrap"},{name:"Vuetify.js"},{name:"bulma"},{name:"SpringBoot"}],db:[{name:"MySQL"},{name:"PostgreSQL"},{name:"H2 Database"},{name:"Oracle"}],others:[{name:"Eclipse"},{name:"VSCode"},{name:"git"},{name:"Github"},{name:"SourceTree"},{name:"TortoiseSVN"},{name:"Thymeleaf"},{name:"Redmine"},{name:"trac"},{name:"jenkins"},{name:"Apache"},{name:"AWS"}]}},mounted:function(){this.handleScroll()},methods:{handleScroll:function(){var t=new IntersectionObserver((function(t){var e,n=o(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;r.isIntersecting&&r.target.classList.add("scrollin")}}catch(t){n.e(t)}finally{n.f()}}));t.observe(this.$el.querySelector(".profile-content")),t.observe(this.$el.querySelector(".currentWork-content")),t.observe(this.$el.querySelector(".skill-content")),t.observe(this.$el.querySelector(".works-content"))}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},c=(n(285),n(54)),v=n(84),_=n.n(v),d=n(282),m=n(279),f=n(268),h=n(274),C=n(280),y=n(276),w=n(277),L=n(271),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{id:"top"}},[o("v-row",[o("div",{staticClass:"image-container display-2"},[o("img",{staticClass:"image",attrs:{src:n(284)}}),t._v(" "),o("p",{staticClass:"page-title font-italic font-weight-bold"},[t._v("m5e2's Portfolio")])]),t._v(" "),o("v-col",{staticClass:"text-center"},[o("v-card",{staticClass:"profile",attrs:{id:"profile"}},[o("h1",{staticClass:"colum-title font-italic font-weight-bold"},[t._v("Profile")]),t._v(" "),o("h4",{staticClass:"colum-title-ja font-italic font-weight-bold"},[t._v("\n          自己紹介\n        ")]),t._v(" "),o("div",{staticClass:"profile-content"},[o("v-list",{attrs:{shaped:""}},t._l(t.profileLists,(function(e,i){return o("v-list-item",{key:i},[o("v-list-item-content",{staticClass:"text-sm-left"},[t._v("\n                "+t._s(e.value)+"\n              ")])],1)})),1)],1)])],1),t._v(" "),o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("v-card",{staticClass:"currentWork",attrs:{id:"currentWork"}},[o("h1",{staticClass:"colum-title font-italic font-weight-bold"},[t._v("\n          Current work content\n        ")]),t._v(" "),o("h4",{staticClass:"colum-title-ja font-italic font-weight-bold"},[t._v("\n          現在の仕事内容\n        ")]),t._v(" "),o("div",{staticClass:"currentWork-content"},[o("v-row",{attrs:{cols:"12"}},[o("v-col",{attrs:{cols:"6"}},[o("h3",{staticClass:"content-para"},[t._v("要件定義 ～ 詳細設計")]),t._v(" "),o("p",[t._v("\n                新規機能の追加や仕様変更の要件を任されたときには要件の洗い出しを行ったり、どの実装方法であれば要件を満たせるかを考えて仕様検討案の作成を行ったりしています。\n              ")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("h3",{staticClass:"content-para"},[t._v("コーディング")]),t._v(" "),o("p",[t._v("\n                主に Vue.js や Typescript , jQuery\n                を使って実装を行っています。\n              ")]),t._v(" "),o("p",[t._v("テストは jest を用いて行っています。")])]),t._v(" "),o("v-col",{attrs:{cols:"6"}},[o("h3",{staticClass:"content-para"},[t._v("結合テスト")]),t._v(" "),o("p",[t._v("\n                リリース 1\n                ヶ月前くらいから所属しているプロジェクトの結合テストを行っています。\n              ")]),t._v(" "),o("p",[t._v("\n                この間に自分が担当した機能で不具合が発見された場合には不具合修正を行うこともあります。\n              ")])])],1)],1)])],1),t._v(" "),o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("v-card",{staticClass:"skill",attrs:{id:"skill"}},[o("h1",{staticClass:"colum-title font-italic font-weight-bold"},[t._v("Skill")]),t._v(" "),o("h4",{staticClass:"colum-title-ja"},[t._v("スキル")]),t._v(" "),o("div",{staticClass:"skill-content"},[o("v-row",{attrs:{cols:"12"}},[o("v-col",{staticClass:"text-center content-style",attrs:{cols:"6"}},[o("p",{staticClass:"text-center headline"},[t._v(t._s(t.COLUM_LANG_TITLE))]),t._v(" "),o("p"),t._v(" "),o("v-list",{attrs:{shaped:""}},t._l(t.Languages,(function(e,i){return o("v-list-item",{key:i},[o("v-list-item-content",[t._v(t._s(e.name))])],1)})),1)],1),t._v(" "),o("v-col",{staticClass:"text-center content-style",attrs:{cols:"6"}},[o("p",{staticClass:"text-center headline"},[t._v(t._s(t.COLUM_FW_LIB_TITLE))]),t._v(" "),o("p"),t._v(" "),o("v-list",{attrs:{shaped:""}},t._l(t.framework_library,(function(e,i){return o("v-list-item",{key:i},[o("v-list-item-content",[t._v(t._s(e.name))])],1)})),1)],1),t._v(" "),o("v-col",{staticClass:"text-center content-style",attrs:{cols:"6"}},[o("p",{staticClass:"text-center headline"},[t._v(t._s(t.COLUM_TOOL_TITLE))]),t._v(" "),o("p"),t._v(" "),o("v-list",{attrs:{shaped:""}},t._l(t.others,(function(e,i){return o("v-list-item",{key:i},[o("v-list-item-content",[t._v(t._s(e.name))])],1)})),1)],1),t._v(" "),o("v-col",{staticClass:"text-center content-style",attrs:{cols:"6"}},[o("p",{staticClass:"text-center headline"},[t._v(t._s(t.COLUM_DB_TITLE))]),t._v(" "),o("p"),t._v(" "),o("v-list",{attrs:{shaped:""}},t._l(t.db,(function(e,i){return o("v-list-item",{key:i},[o("v-list-item-content",[t._v(t._s(e.name))])],1)})),1)],1)],1)],1)])],1),t._v(" "),o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("v-card",{staticClass:"work",attrs:{id:"works"}},[o("h1",{staticClass:"colum-title font-italic font-weight-bold"},[t._v("Works")]),t._v(" "),o("h4",{staticClass:"colum-title-ja"},[t._v("製作物")]),t._v(" "),o("div",{staticClass:"works-content"},[o("v-row",{attrs:{cols:"12"}},[o("v-col",{staticClass:"content-style",attrs:{cols:"6"}},[o("v-list-item-content",[o("h3",[t._v("ポートフォリオ")]),t._v(" "),o("v-card-subtitle",[t._v("Nuxt.js, Node.js, Vuetify.js")]),t._v(" "),o("a",{attrs:{href:"https://github.com/m5e2/Self-Introduction"}},[t._v("Github")])],1)],1),t._v(" "),o("v-col",{staticClass:"content-style",attrs:{cols:"6"}},[o("v-list-item-content",[o("h3",[t._v("イベント時出席者登録アプリ")]),t._v(" "),o("v-card-subtitle",[t._v("Java, Gradle, Thymeleaf, nginx, H2DB")]),t._v(" "),o("a",{attrs:{href:"https://github.com/m5e/Acceptance-confirmation"}},[t._v("Github")])],1)],1),t._v(" "),o("v-col",{staticClass:"content-style",attrs:{cols:"6"}},[o("v-list-item-content",[o("h3",[t._v("ルーレット")]),t._v(" "),o("v-card-subtitle",[t._v("jQuery")]),t._v(" "),o("a",{attrs:{href:"https://github.com/m5e/Practice-Roulette-Machine"}},[t._v("Github")])],1)],1),t._v(" "),o("v-col",{staticClass:"content-style",attrs:{cols:"6"}},[o("v-list-item-content",[o("h3",[t._v("定期外交通費申請アプリ")]),t._v(" "),o("h3",[t._v("( 製作途中 )")]),t._v(" "),o("v-card-subtitle",[t._v("Nuxt.js, Node.js, bulma")]),t._v(" "),o("a",{attrs:{href:"https://github.com/m5e/transportation-expenses"}},[t._v("Github")])],1)],1)],1)],1)])],1)],1)],1)}),[],!1,null,"e943a450",null);e.default=component.exports;_()(component,{VCard:d.a,VCardSubtitle:m.a,VCol:f.a,VContainer:h.a,VList:C.a,VListItem:y.a,VListItemContent:w.a,VRow:L.a})}}]);