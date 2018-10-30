<template>
  <header>
    <nuxt-link to="/" :class="$style.name">Hoony Chang
    </nuxt-link>
    <div
      @click="navToggleClicked()"
      :class="navCollapsed ? $style.navToggle : [$style.navToggle, $style.opened]">
      <div :class="$style.navToggleBar"></div>
      <div :class="$style.navToggleBar"></div>
      <div :class="$style.navToggleBar"></div>
    </div>
    <nav :class="navCollapsed ? $style.nav : [$style.nav, $style.visible]">
      <nuxt-link to="/" :class="$style.navLink" :exact-active-class="$style.active">
        <span @click="navCollapse()" :class="$style.navEmoji">🏡</span><span :class="$style.navLabel">home</span>
      </nuxt-link>
      <nuxt-link to="https://www.linkedin.com/in/the6thm0nth/" :class="$style.navLink" :active-class="$style.active" target="_blank">
        <span @click="navCollapse()" :class="$style.navEmoji">🏃‍♂️</span><span :class="$style.navLabel">Linkedin</span>
      </nuxt-link>
      <nuxt-link to="https://medium.com/the6thblog" :class="$style.navLink" :active-class="$style.active" target="_blank">
        <span @click="navCollapse()" :class="$style.navEmoji">📓</span><span :class="$style.navLabel">Medium</span>
      </nuxt-link>
    </nav>
    <div>
      <nuxt-link to="https://my.fsf.org/donate">
        <img src="https://static.fsf.org/nosvn/associate/crm/993565.png" alt="FSF" title="FSF Donate" />
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navCollapsed: true,
    }
  },
  methods: {
    navToggleClicked: function() {
      this.navCollapsed = !this.navCollapsed
    },
    navCollapse: function() {
      this.navCollapsed = true
    },
    closeHandler: function(e) {
      if (!this.$el.contains(e.target)) {
        this.navCollapsed = true
      }
    },
  },
  mounted() {
    window.addEventListener("click", this.closeHandler)
    window.addEventListener("touchend", this.closeHandler)
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closeHandler)
    window.removeEventListener("touchend", this.closeHandler)
  },
}
</script>

<style module lang="scss">
@import "~assets/variables";
@import "~assets/media-query";
@import "~assets/placeholders";

$header-height: 60px;
$nav-link-size: 40px;

%nav-link-base {
  width: $nav-link-size;
  height: $nav-link-size;
  border-radius: 20px;
  background-color: rgba($bg-gray, 0.9);

  @include wide-screen {
    background: none;
  }
}

header {
  z-index: 1000;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgba(white, 0.8);

  height: $header-height;
  padding: 0 1em;

  @include wide-screen {
    position: initial;

    height: auto;
    flex-direction: column;
    align-items: flex-start;

    padding: 5% 24px 5% 48px;

    flex-shrink: 0;
    flex-grow: 0;
    width: 272px;

    padding-bottom: 1rem;
  }
}

.name {
  @extend %reset-anchor-style;

  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;

  &:hover {
    color: $text-color;
  }

  @include wide-screen {
    font-size: 3rem;
    white-space: pre-line;
    margin: 0;
  }
}

.navToggle {
  @extend %nav-link-base;

  padding: 11px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @include wide-screen {
    display: none;
  }
}

.navToggleBar {
  width: 100%;
  height: 2px;
  border-top: 2px solid $border-color-dark;

  transition: all 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform-origin: center;
}

.navToggle.opened {
  .navToggleBar {
    &:first-child {
      transform: translateY(6px) rotate(45deg);
    }

    &:last-child {
      transform: translateY(-6px) rotate(-45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }
  }
}

.nav {
  position: absolute;
  top: $header-height;
  right: 1em;

  margin-top: 10px;

  flex-direction: column;
  justify-content: space-between;

  @include wide-screen {
    position: initial;

    display: block;

    margin-top: 2em;
  }
}

.navLink {
  @extend %reset-anchor-style;
  @extend %nav-link-base;
  display: flex;
  transition: transform, opacity 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);

  opacity: 0;
  pointer-events: none;
  animation-fill-mode: forwards;

  transform: translateY(10px);

  justify-content: center;
  align-items: center;

  line-height: 1;

  font-size: 1.5em;

  margin-bottom: 20px;

  @include wide-screen {
    pointer-events: initial;
    transform: none;

    justify-content: flex-start;
    opacity: initial;

    width: auto;
    height: auto;

    font-size: 1em;

    border: none;
  }
}

@mixin popup($i, $disabled: false) {
  $start: 0% + 15 * $i;
  $end: 50% + 15 * $i;

  $target-opacity: 1;
  @if $disabled == true {
    $target-opacity: 0.5;
  }

  @keyframes popup#{$i} {
    0% {
      transform: translateY(10px);
      opacity: 0;
    }

    #{$start} {
      transform: translateY(10px);
      opacity: 0;
    }

    #{$end} {
      transform: translateY(0);
      opacity: $target-opacity;
    }

    100% {
      transform: translateY(0);
      opacity: $target-opacity;
    }
  }
}

.nav.visible {
  display: flex;

  .navLink {
    opacity: initial;
    pointer-events: initial;
  }

  @for $i from 0 to 3 {
    @include popup($i);

    .navLink:nth-child(#{$i + 1}) {
      animation-name: popup#{$i};
      animation-duration: 1s;
    }
  }

  .disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
}

.navLink {
  &.active {
    font-weight: bold;
  }

  @include wide-screen {
    &.disabled {
      opacity: 0.5;
    }
  }
}

.navLabel {
  display: none;
  margin-left: 12px;

  @include wide-screen {
    display: block;
  }
}

.octahedron {
  display: none;

  @include wide-screen {
    display: block;
  }
}
</style>
