exports.plugin = {
  register: (server, options) => {
    server.route({
      path: '/',
      method: 'get',
      options: {
        handler: (request, h) => {
          return { ok: 200 }
        }
      }
    })
  },
  pkg: require('../package.json')
}
