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

module.exports = (options) => {
  return new Flappy(options)
}
