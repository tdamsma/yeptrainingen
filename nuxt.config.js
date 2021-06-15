export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'yeptrainingen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Dosis:wght@500&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/custom.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@aceforth/nuxt-optimized-images'

  ],
  optimizedImages: {
    inlineImageLimit: 1000,
    imagesName: ({ isDev }) => isDev ? '[path][name][hash:optimized]-[width].[ext]' : 'img/[contenthash:7]-[width].[ext]',
    responsiveImagesName: ({ isDev }) => isDev ? '[path][name]--[width][hash:optimized].[ext]' : 'img/[contenthash:7]-[width].[ext]',
    handleImages: ['jpg', 'jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: true,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 80
    },
    optipng: {
      optimizationLevel: 3
    },
    pngquant: false,
    gifsicle: {
      interlaced: true,
      optimizationLevel: 3
    },
    svgo: {
      // enable/disable svgo plugins here
    },
    webp: {
      preset: 'default',
      quality: 75
    }
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/http',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],
  // https://bootstrap-vue.org/docs
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: false
    // components: ['BNav', 'BNavbar', 'BNavbarNav', 'BNavbarBrand', 'BNavbarToggle', 'BNavItem', 'BNavText', 'BCollapse', 'BNavItemDropdown'],
    // directives: ['VBModal', 'VBPopover', 'VBTooltip', 'VBScrollspy', 'VBToggle', 'VBVisible', 'VBHover']
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      rehypePlugins: ['~/plugins/rehype-content-image.js']
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'ignore-loader'
      })
    }
  }

}
