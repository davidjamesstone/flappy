## flappy - A tiny fluent server composer for hapi.js.

`flappy` provides a fluent api based composition of hapi's server.

### Example

```js
const flappy = require('flappy')

flappy({ port: 3000 })
  .use(require('blipp'))
  .use(require('inert'))
  .use(require('vision'), opts)
  .use(require('./my-plugin'), opts2)
  .start()
  .then(server => console.log(server.info))
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
```
### API


#### `flappy(options) => this`

`flappy` is a is a single function taking the same arguments as [`Hapi.server`](https://hapijs.com/api#server.options).


#### `.use(plugins, [options]) => this`

The `use` method thales the same arguments as hapi's `server.register` function. See https://hapijs.com/api#server.register()

#### `.start() => Promise<Hapi.server>`

Registers the plugins and starts the hapi server

#### `.compose() => Promise<Hapi.server>`

Registers the plugins, initializes the server without starting it. Use when testing the server.

### hapi version dependency

flappy can support different versions of hapi. Adding support for a new version of hapi is considered a `minor` change. Removing support for a version of hapi is considered a `major` change.

By default NPM will resolve flappy's dependency on hapi using the most recent supported version of hapi. To force a specific supported hapi version for your project, include hapi in your package dependencies along side of flappy.

Flappy only supports hapi **17**.

### Why?
Less code in getting a hapi server up. Arguably more concise.
The fluent design encourages server code to always be register via plugins.


### More Examples

```js
// Async / await example
const flappy = require('flappy')

try {
  const server = flappy({ port: 3000 })
    .use(require('blipp'))
    .use(require('inert'))
    .use(require('vision'), opts)
    .use(require('./my-plugin'), opts2)
    .start()

  console.log(server.info)
} catch (err) {
  console.error(err)
  process.exit(1)
}
```