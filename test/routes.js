export default {
  name: 'routes',
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
  }
}
