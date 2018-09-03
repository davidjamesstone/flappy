const hapi = require('hapi')

class Flappy {
  constructor (options) {
    const server = hapi.server(options)
    this.server = server
    this.registrations = []
  }

  use (plugin, options) {
    this.registrations.push({ plugin, options })
    return this
  }

  async start () {
    await this.compose()
    await this.server.start()
    return this.server
  }

  async compose () {
    const server = this.server
    const regs = this.registrations
    const promises = regs.map(reg => server.register(reg.plugin, reg.options))

    return Promise.all(promises).then(results => {
      return server
    })
  }
}

new Flappy({ port: 3000 })
  // .use('vision', viewOptions)
  .use(require('inert'))
  .use(require('blipp'))
  .start()
  .then(server => console.log(server.info))
  .catch(err => console.error(err))
// const startServer = async function () {
//   try {
//     const server = hapi.server({
//       cache: [{ engine: require('redis') }],
//       port: 8000
//     })

//     const plugins = []
//     const registerOptions = { once: false }

//     function register (name, options) {
//       plugins.push({
//         plugin: path.join(__dirname, name),
//         options: options
//       })
//     }

//     register('./awesome-plugin.js')
//     register(require('myplugin'), { uglify: true })
//     register('./ui-user')
//     register('./ui-admin',)

//     plugins.push({
//       plugin: 
//     })

//     plugins.push({
//       plugin: path.join(__dirname, )
//     })

//     plugins.push({
//       plugin: path.join(__dirname, ),
//       options: { sessiontime: 500 },
//       routes: { prefix: '/admin' }
//     })

//     await server.register(plugins, registerOptions)

//     await server.start()
//     console.log('hapi days!')
//   } catch (err) {
//     console.error(err)
//     process.exit(1)
//   }
// }

// startServer()
