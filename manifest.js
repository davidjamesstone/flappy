const manifest = {
  server: {
    port: 3000,
    host: '0.0.0.0',
    routes: {
      //  Sets common security headers
      //  http://hapijs.com/api#route-options
      security: true,
      state: {
        failAction: 'ignore' // ignore any legacy cookies state
      }
    }
  },
  register: {
    plugins: [
      // {
      //   plugin: 'inert'
      // },
      // {
      //   plugin: 'h2o2'
      // },
      // {
      //   plugin: 'vision'
      // }
    ]
  }
}

module.exports = manifest
