const hapi = require('hapi')

class Flappy {
  constructor (options) {
    const server = hapi.server(options)
    this.server = server
    this.registrations = []
  }

  use (plugin, options, condition = true) {
    if (typeof options === 'boolean') {
      condition = options
      options = undefined
    }

    if (condition) {
      this.registrations.push({ plugin, options })
    }

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

    for (let i = 0; i < regs.length; i++) {
      const reg = regs[i]
      await server.register(reg.plugin, reg.options)
    }

    return server
  }
}

module.exports = (options) => {
  return new Flappy(options)
}
