const flappy = require('..')

const options = {
  manifest: {
    relativeTo: __dirname
  }
}

// flappy(options)
//   .start()
//   .register('inert')
//   .register(function errorPages (server, options) {
//     server.ext('onPreResponse', (request, h) => {
//       const response = request.response

//       if (response.isBoom) {
//         // An error was raised during
//         // processing the request
//         const statusCode = response.output.statusCode

//         // In the event of 404
//         // return the `404` view
//         if (statusCode === 404) {
//           return h.view('404').code(statusCode)
//         }

//         request.log('error', {
//           statusCode: statusCode,
//           data: response.data,
//           message: response.message
//         })

//         // The return the `500` view
//         return h.view('500').code(statusCode)
//       }

//       return h.continue
//     })
//   })
//   .then(server => {
//     console.log(`Server started on port ${server.port}`)
//   })
//   .catch(err => {
//     console.error(err)
//   })




async function run () {
  try {
    const flap = await flappy(options)
      .port(3001)
      // .host(env.HOST || '0.0.0.0')
      // .register('inert')
      .register('./routes')
      .register('./routes.1')
      // .register('good', {})
      // .register('./routes-admin', false)
      .start()

    console.log('Server started', flap.server.info)
    return flap
  } catch (err) {
    console.error(err)
  }
}

run()
