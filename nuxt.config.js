const path = require("path")
const axios = require("axios")
const title = "the6thm0nth.net"
const url = "https://the6thm0nth.net"

const meta = {
  "og:locale": "ko_kR",
  "og:site_name": "Hoony Chang",
  "og:title": title,
  "og:image": `${url}/the6thm0nth.jpg`,
  "og:image:type": "image/jpg",
  "og:image:width": "1200",
  "og:image:height": "630",
  "og:url": url,
  "twitter:site": "@the6thm0nth",
  "twitter:title": title,
  "twitter:description": "Mangwon-dong Basketballer & FTTO Coordinator",
  "twitter:url": url,
  "twitter:card": "summary_large_image",
  "twitter:image": `${url}/logo.png`,
  "twitter:creator": "Hoony Chang"
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "the6thm0nth.net",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Mangwon-dong Basketballer & FTTO Coordinator"
      },
      ...Object.keys(meta).map(name => ({
        hid: name,
        name,
        content: meta[name]
      }))
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/the6thm0nth.jpg" }]
  },
  css: [{ src: "~assets/style.scss", lang: "scss" }],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  generate: {
    routes: function() {
      const blog = require("./static/blog/index.json")

      return blog.map(article => {
        const route = {
          route: `/articles/${article.slug}`,
          payload: article
        }
        return route
      })
    }
  },
  build: {
    /*
    ** Run ESLINT on save
    */
    // extend(config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  modules: [
    [
      "@nuxtjs/axios",
      "@nuxtjs/google-analytics",
      {
        ua: "UA-121696619-1",
        id: "UA-102906433-1"
      }
    ]
  ]
}
