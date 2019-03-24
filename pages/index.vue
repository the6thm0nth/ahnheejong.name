<template>
  <section class="container" ref="container">
    <div id="language-selectors">
      <a
        @click="setLang('ko')"
        :class="lang === 'ko' ? 'language-selector active' : 'language-selector'"
      >KO</a>
      <a
        @click="setLang('en')"
        :class="lang === 'en' ? 'language-selector active' : 'language-selector'"
      >EN</a>
    </div>
    <main id="main-ko" class="main" v-if="lang === 'ko'">
      <section class="bio">
        <h2>👨‍💻 삶</h2>
        <div class="section-content">
          <a/>
          <a href="http://www.frograms.com/">Watcha Inc.</a>에서 일하는 프론트엔드 개발자입니다.
          한국의 언더씬 개발 레이블
          <a target="_blank" href="https://ftto.kr">FTTO</a>의 코디네이터이자 창작자입니다.
          작은 서점에서 일하는 바리스타를 꿈꿉니다.
          <br>

          <h4>대표 프로젝트</h4>-
          <a href="http://jaesan.newstapa.org/" target="_blank">고위공직자 재산공개 사이트</a>
          -
          <a href="https://ftto.kr/defol" target="_blank">Defol: 이미지 관리 도구</a>
          -
          <a href="https://ftto.kr/amigo" target="_blank">Amigo: 맥용 Naver Papago 클라이언트</a>
          -
          <a href="https://aki-kitchen.ftto.kr" target="_blank">아키식당</a>
          -
          <a href="https://gookgam.com" target="_blank">국회의원 감시하기</a>
        </div>
      </section>

      <section class="interest">
        <h2>⛹️흥</h2>
        <div class="section-content">
          <a/>남녀혼성 WAMANG(와우산 + 망원동)팀에서 농구를 합니다.
          경기대학교 서울체육관에서 모이며 실력과 남녀노소 불문하고 누구나 환영합니다.
          <a
            href="https://www.youtube.com/watch?v=2hIrbnVx4k4"
            target="_blank"
          >커리</a>의 리더쉽과 모든 것,
          <a href="https://www.youtube.com/watch?v=2CXtbafZT0c" target="_blank">어빙</a>의 화려함, 그리고 신인
          <a href="https://www.youtube.com/watch?v=gv3eYk8mnE0" target="_blank">마켈 펄츠</a>를
          <strike>농구용품 쇼핑도</strike>좋아합니다.
          <!-- <a target="_blank" href="https://toss.im/">Toss</a>를 만드는 비바리퍼블리카에서 UI 프로그래머로 일하고 있습니다.
          강력한 타입 시스템을 가진 언어로 작업하는 것을 선호합니다.
          요즘은 개발과 디자인, 두 세계를 잇는 데에 관심이 많습니다.
          더 자세한 내용은 <nuxt-link to="/resume/">이력서</nuxt-link>를 참고하세요.-->
        </div>
      </section>

      <section class="activities">
        <h2>🤹‍♂️ 자원활동</h2>
        <div class="section-content">
          <a/>
          <a href="https://developer.mozilla.org/ko/profiles/hoony" target="_blank">MDN web docs 번역</a>
          <br>
          <a href="http://hacks.mozilla.or.kr/author/shigerc/" target="_blank">모질라 hacks 블로그 번역</a>
        </div>
      </section>

      <section class="speaks">
        <h2>🎤 발표</h2>
        <div class="section-content">
          <a/>
          <a
            href="https://pad.okfn.org/p/Open_Government_Data_updates_from_around_the_world"
            target="_blank"
          >Open Knowledge Festival 2014</a>
          <br>
          <a
            href="https://www.flickr.com/photos/wowcckorea/sets/72157645888886555/"
            target="_blank"
          >디지털사회혁신포럼</a> (
          <a href="https://www.slideshare.net/codenamu/civic-hacker-37302167" target="_blank">발표자료</a>)
          <br>
          <a
            href="http://2014con.cckorea.org/program/3/hacking-the-city-with-technology/"
            target="_blank"
          >2014 CCKOREA Global Conference</a>
          <br>
        </div>
      </section>

      <section class="donate">
        <h2>🧗‍♂️ 후원</h2>
        <div class="section-content">
          <a/>
          <a href="https://www.fsf.org" target="_blank">자유 소프트웨어 재단</a>
          <br>
          <a href="https://newstapa.org" target="_blank">뉴스타파</a>
          <br>
          <a href="https://dotface.kr" target="_blank">닷페이스</a>
          <br>
        </div>
      </section>
    </main>
    <main id="main-en" class="main" v-if="lang === 'en'">
      <section class="bio">
        <h2>👨‍💻 Life</h2>
        <div class="section-content">
          <a/>cooridnator & creator of
          <a target="_blank" href="https://ftto.kr">FTTO</a>
          , the first Korean software development label of the underscene.
          I use Node, React, Electron.
          <h5>Projects</h5>-
          <a
            href="http://jaesan.newstapa.org/"
            target="_blank"
          >Public Officials' Property Search Site</a>
          -
          <a
            href="https://ftto.kr/defol"
            target="_blank"
          >Defol: An image file management app for Designers</a>
          -
          <a
            href="https://ftto.kr/amigo"
            target="_blank"
          >Amigo: Naver Papago Client for Mac OS</a>
          -
          <a href="https://aki-kitchen.ftto.kr" target="_blank">Aki's Kitchen</a>
          -
          <a
            href="https://gookgam.com"
            target="_blank"
          >Gookgam(: Monitoring the Assembly Members)</a>
        </div>
      </section>

      <section class="interest">
        <h2>⛹️‍ Interest</h2>
        <div class="section-content">
          <a/>I play the basketball at Team WAMANG(Wow-mountain + Mangwon-dong), the coed basketball team.
          We play at Gym in the Ewha University without distiction of age, sex or skill.
          I like leadership & evernything of
          <a
            href="https://www.youtube.com/watch?v=2hIrbnVx4k4"
            target="_blank"
          >Curry</a>, fancy of
          <a href="https://www.youtube.com/watch?v=2CXtbafZT0c" target="_blank">Irving</a>, and rookie
          <a
            href="https://www.youtube.com/watch?v=gv3eYk8mnE0"
            target="_blank"
          >Markelle Fultz</a>,
          <strike>and shopping basketball stuffs.</strike>
        </div>
      </section>

      <section class="activities">
        <h2>🤹‍♂️ Volunteering</h2>
        <div class="section-content">
          <a/>
          <a
            href="https://developer.mozilla.org/ko/profiles/hoony"
            target="_blank"
          >MDN web docs translation</a>
          <br>
          <a
            href="http://hacks.mozilla.or.kr/author/shigerc/"
            target="_blank"
          >Mozilla hacks blog translation</a>
        </div>
      </section>

      <section class="speaks">
        <h2>🎤 Speaks</h2>
        <div class="section-content">
          <a/>
          <a
            href="https://pad.okfn.org/p/Open_Government_Data_updates_from_around_the_world"
            target="_blank"
          >Open Knowledge Festival 2014</a>
          <br>
          <a
            href="https://www.flickr.com/photos/wowcckorea/sets/72157645888886555/"
            target="_blank"
          >Digital Society Innovation</a>(
          <a
            href="https://www.slideshare.net/codenamu/civic-hacker-37302167"
            target="_blank"
          >Slides</a>)
          <br>
          <a
            href="http://2014con.cckorea.org/program/3/hacking-the-city-with-technology/"
            target="_blank"
          >2014 CCKOREA Global Conference</a>
          <br>
        </div>
      </section>

      <section class="donate">
        <h2>🧗‍♂️ Donation</h2>
        <div class="section-content">
          <a/>
          <a href="https://www.fsf.org" target="_blank">Free Software Foundation</a>
          <br>
          <a href="https://newstapa.org" target="_blank">Newstapa</a>
          <br>
          <a href="https://dotface.kr" target="_blank">Dotface</a>
          <br>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return { lang: "ko" };
  },
  mounted() {
    this.$refs.container.parentElement.scrollTop = 0;
  },
  methods: {
    setLang: function(lang) {
      this.lang = lang;
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/media-query";
@import "~assets/placeholders";

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
