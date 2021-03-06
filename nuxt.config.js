export default {
    target: 'static',

    head: {
    title: 'vote-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
    },
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    plugins: [],
    build: {},
    css: [
        '@/assets/default.css',
        '@/assets/vote-page.css',
    ],
    dev: {},
    env: {},
    generate: {},
}