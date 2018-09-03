const glue = require('glue')

class Flappy {
  constructor (options) {
    // Server Options
    const serverOptions = options.server || {}

    if (!serverOptions.port) {
      serverOptions.port = 3000
    }

    // if (!serverOptions.host) {
    //   serverOptions.host = '0.0.0.0'
    // }

    // Manifest Options
    this._manifestOptions = options.manifest
    this._manifest = {
      server: serverOptions,
      register: {
        plugins: []
      }
    }
  }

  async compose () {
    const server = await glue.compose(this._manifest, this._manifestOptions)
    this._server = server
    return this
  }

  async start () {
    await this.compose(this._manifest)
    await this._server.start()
    return this
  }

  register (plugin, options, condition) {
    this._manifest.register.plugins.push({
      plugin: plugin,
      options: options
    })

    return this
  }

  get manifest () {
    return this._manifest
  }

  get server () {
    return this._server
  }

  port (port) {
    this._manifest.server.port = port
    return this
  }

  host (host) {
    this._manifest.server.host = host
    return this
  }
}

module.exports = (options) => {
  return new Flappy(options)
}
