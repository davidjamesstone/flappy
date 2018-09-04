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
      .use(require('./routes'))
      .compose()
  })

  lab.test('GET / route works', async () => {
    const options = {
      method: 'GET',
      url: '/'
    }

    const response = await server.inject(options)
    Code.expect(response.statusCode).to.equal(200)
    Code.expect(response.headers['content-type']).to.include('application/json')
  })
})
