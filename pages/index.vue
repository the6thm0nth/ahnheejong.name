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
        <h2>👨‍💻</h2>
        <div class="section-content">
          <a />한국의 언더씬 개발 레이블 <a target="_blank" href="https://ftto.kr">FTTO</a>의 코디네이터이자 창작자입니다.
          Node, React, Electron을 다룹니다.

          대표 프로젝트
          - <a href="http://jaesan.newstapa.org/" target="_blank">고위공직자 재산공개 사이트</a>
          - <a href="#" target="_blank">국회의원 감시하기 (8월 15일 공개예정)</a>
        </div>
      </section>
      <section class="value">
        <h2>🤟</h2>
        <div class="section-content">
          <a href="https://www.mozilla.org" target="_blank">Mozilla</a><br />
          <a href="https://creativecommons.org" target="_blank">Creative Commons</a>
        </div>
      </section>
      <section class="interest">
        <h2>⛹️‍</h2>
        <div class="section-content">
          <a />남녀혼성 WAMANG(와우산 + 망원동)팀에서 농구를 합니다.
          이화여자대학교 실내체육관에서 모이며 실력과 남녀노소 불문하고 누구나 환영합니다.
          <a href="https://www.youtube.com/watch?v=2hIrbnVx4k4" target="_blank">커리</a>의 리더쉽과 모든 것, <a href="https://www.youtube.com/watch?v=2CXtbafZT0c" target="_blank">어빙</a>의 화려함, 그리고 신인 <a href="https://www.youtube.com/watch?v=gv3eYk8mnE0" target="_blank">마켈 펄츠</a>를 <strike>농구용품 쇼핑도</strike> 좋아합니다.
          <!-- <a target="_blank" href="https://toss.im/">Toss</a>를 만드는 비바리퍼블리카에서 UI 프로그래머로 일하고 있습니다.
          강력한 타입 시스템을 가진 언어로 작업하는 것을 선호합니다.
          요즘은 개발과 디자인, 두 세계를 잇는 데에 관심이 많습니다.
          더 자세한 내용은 <nuxt-link to="/resume/">이력서</nuxt-link>를 참고하세요. -->
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
      <section class="work">
        <h2>👨‍💻</h2>
        <div class="section-content">
          <a />cooridnator & creator of <a target="_blank" href="https://ftto.kr">FTTO</a>, the first Korean software development label of the underscene.
          I use Node, React, Electron.

          Projects
          - <a href="http://jaesan.newstapa.org/" target="_blank">Public Officials' Property Search Site</a>
          - <a href="#" target="_blank">Gookgam(: Monitoring the Assembly Members) (15th Aug 2018)</a>
        </div>
      </section>
      <section class="value">
        <h2>🤟</h2>
        <div class="section-content">
          <a href="https://www.mozilla.org" target="_blank">Mozilla</a><br />
          <a href="https://creativecommons.org" target="_blank">Creative Commons</a>
        </div>
      </section>
      <section class="interest">
        <h2>⛹️‍</h2>
        <div class="section-content">
          <a />I play the basketball at Team WAMANG(Wow-mountain + Mangwon-dong), the coed basketball team.
          We play at Gym in the Ewha University without distiction of age, sex or skill.
          I like leadership & evernything of <a href="https://www.youtube.com/watch?v=2hIrbnVx4k4" target="_blank">Curry</a>, fancy of <a href="https://www.youtube.com/watch?v=2CXtbafZT0c" target="_blank">Irving</a>, and rookie <a href="https://www.youtube.com/watch?v=gv3eYk8mnE0" target="_blank">Markelle Fultz</a>, <strike>and shopping basketball stuffs.</strike>
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
