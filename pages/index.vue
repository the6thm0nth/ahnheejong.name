<template>
  <section class="container" ref="container">
    <div id="language-selectors">
      <a
        @click="setLang('ko')"
        :class="lang === 'ko' ? 'language-selector active' : 'language-selector'">
        KO
      </a>
      <a
        @click="setLang('en')"
        :class="lang === 'en' ? 'language-selector active' : 'language-selector'">
        EN
      </a>
    </div>
    <main id="main-ko" class="main" v-if="lang === 'ko'">
      <section class="bio">
      </section>
      <section class="value">
        <h2>가치</h2>
        <div class="section-content">
        </div>
      </section>
      <section class="work">
        <h2>일</h2>
        <div class="section-content">
          <!-- <a target="_blank" href="https://toss.im/">Toss</a>를 만드는 비바리퍼블리카에서 UI 프로그래머로 일하고 있습니다.
          강력한 타입 시스템을 가진 언어로 작업하는 것을 선호합니다.
          요즘은 개발과 디자인, 두 세계를 잇는 데에 관심이 많습니다.
          더 자세한 내용은 <nuxt-link to="/resume/">이력서</nuxt-link>를 참고하세요. -->
        </div>
      </section>
      <section class="interest">
        <h2>관심사</h2>
        <div class="section-content">
        </div>
      </section>
    </main>
    <main id="main-en" class="main" v-if="lang === 'en'">
      <section class="bio">
        <h2>welcome</h2>
        <div class="section-content">
          <!-- good to see you! i'm ahn heejong.
          i live in seoul and i make websites.
          i am:
          <ul>
            <li>admirer of those who admire beautiful things.</li>
            <li>beer, book and triple double u enthusiast.</li>
            <li>feminist.</li>
          </ul> -->
        </div>
      </section>
      <section class="value">
        <h2>value</h2>
        <div class="section-content">
        </div>
      </section>
      <section class="work">
        <h2>work</h2>
        <div class="section-content">
          <!-- i'm working at Viva Republica as a UI developer, making <a target="_blank" href="https://toss.im/">Toss</a>.
          i prefer languages which are powered by a smart type system.
          nowadays, i'm deeply into bridging two worlds: programming and design.
          see <nuxt-link to="/resume/">resume</nuxt-link> for more details. -->
        </div>
      </section>
      <section class="interest">
        <h2>interests</h2>
        <div class="section-content">
          <!-- i drink, read, listen to music or write during my free time.
          i prefer beer among all alcoholic drinks, and stout among all beers.
          i try not to be picky on genres, but mostly end up with novels somehow.
          you can find my writings on <a href="/articles">articles menu</a> and <a target="_blank" href="https://hjlog.me">my couple blog</a>(mostly in Korean). -->
        </div>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  data () {
    return { lang: 'ko' }
  },
  mounted () {
    this.$refs.container.parentElement.scrollTop = 0
  },
  methods: {
    setLang: function (lang) {
      this.lang = lang
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/media-query';
@import '~assets/placeholders';

.language-selector {
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 0.5rem;
}

.active {
  color: red;
}

.section-content {
  word-break: keep-all;
  line-height: 1.8;

  ul {
    margin-top: 1em;
  }

  @include wide-screen {
    white-space: pre-line;
  }
}
</style>
