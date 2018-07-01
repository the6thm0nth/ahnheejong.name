<template>
  <div id="root">
    <my-header />
    <div class="content">
      <nuxt class="page" />
      <footer class="footer">
        <div class="email">
          <a href="mailto:the6thm0nth@pm.me">the6thm0nth@pm.me</a>
        </div>
        <div class="twitter">
          <a href="https://twitter.com/the6thm0nth">twitter</a>
        </div>
        <small>
          this site (<a target="_blank" href="https://github.com/the6thm0nth/the6thm0nth.github.io">source code</a>) is powered by
          <a href="https://nuxtjs.org/">Nuxt.js</a>,
          <a href="https://pages.github.com/">Github Pages</a> and Amazing Programmer, <a href="http://ahnheejong.name/" target="_blank">Heejong Ahn</a>
        </small>
      </footer>
    </div>
  </div>
</template>
<script>
import Header from '~/components/Header'

export default {
  components: {
    'my-header': Header
  }
}

</script>
<style lang="scss">
@import '~assets/media-query';
@import '~assets/placeholders';

$header-height: 60px;

/* layout */
#root {
  padding: 0;

  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @include wide-screen {
    flex-direction: row;
    align-items: flex-start;

    height: 100vh;
    overflow-y: hidden;
  }
}

header,
footer {
  flex-shrink: 0;
}

.main {
  flex-grow: 1;
}

.content {
  flex-grow: 1;

  padding: 1em;
  margin-top: $header-height;

  display: flex;
  flex-direction: column;

  @include wide-screen {
    padding: 5%;
    margin-top: 0;

    flex: 1 1 70%;

    overflow-y: auto;
    height: 100%;
  }
}

.page {
  flex-grow: 1;
  margin-bottom: 3rem;
  max-width: 800px;

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
}

.container {
  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
}
</style>
