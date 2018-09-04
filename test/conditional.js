const Lab = require('lab')
const Code = require('code')
const flappy = require('..')
const lab = exports.lab = Lab.script()

lab.experiment('Test', () => {
  let server

  // Create server before each test
  lab.before(async () => {
    server = await flappy({ port: 3000 })
      .use(require('blipp'))
      .use(require('./routes'), false)
      .compose()
  })

  lab.test('GET / route 404', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const response = await server.inject(options)
    Code.expect(response.statusCode).to.equal(404)
  })
})
