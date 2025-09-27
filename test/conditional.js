import Lab from '@hapi/lab'
import Code from '@hapi/code'
import blipp from 'blipp'
import flappy from '../index.js'
import routes from './routes.js'

export const lab = Lab.script()

lab.experiment('Test', () => {
  let server

  // Create server before each test
  lab.before(async () => {
    server = await flappy({ port: 3000 })
      .use(blipp)
      .use(routes, false)
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
