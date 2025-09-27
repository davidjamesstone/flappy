import Lab from '@hapi/lab'
import Code from '@hapi/code'
import flappy from '../index.js'

import blipp from 'blipp'
import routes from './routes.js'

export const lab = Lab.script()

lab.experiment('Test', () => {
  let server

  // Create server before each test
  lab.before(async () => {
    server = await flappy({ port: 3000 })
      .use(blipp)
      .use(routes)
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
