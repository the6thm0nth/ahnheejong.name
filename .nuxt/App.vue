<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="nuxt.err ? 'nuxt' : layout"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/style.scss'


let layouts = {

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"the6thm0nth.net","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Mangwon-dong Basketballer & FTTO Coordinator"},{"hid":"og:locale","name":"og:locale","content":"ko_kR"},{"hid":"og:site_name","name":"og:site_name","content":"Hoony Chang"},{"hid":"og:title","name":"og:title","content":"the6thm0nth.net"},{"hid":"og:image","name":"og:image","content":"https://the6thm0nth.net/the6thm0nth.jpg"},{"hid":"og:image:type","name":"og:image:type","content":"image/jpg"},{"hid":"og:image:width","name":"og:image:width","content":"1200"},{"hid":"og:image:height","name":"og:image:height","content":"630"},{"hid":"og:url","name":"og:url","content":"https://the6thm0nth.net"},{"hid":"twitter:site","name":"twitter:site","content":"@the6thm0nth"},{"hid":"twitter:title","name":"twitter:title","content":"the6thm0nth.net"},{"hid":"twitter:description","name":"twitter:description","content":"Mangwon-dong Basketballer & FTTO Coordinator"},{"hid":"twitter:url","name":"twitter:url","content":"https://the6thm0nth.net"},{"hid":"twitter:card","name":"twitter:card","content":"summary_large_image"},{"hid":"twitter:image","name":"twitter:image","content":"https://the6thm0nth.net/logo.png"},{"hid":"twitter:creator","name":"twitter:creator","content":"Hoony Chang"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/the6thm0nth.jpg"}],"style":[],"script":[]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options._nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

