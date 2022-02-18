const replace = require('replace-in-file')

const options = {
  files: '.vercel_build_output/functions/node/server/chunks/app/server.mjs',
  from: /@apollo\/client\/core/g,
  to: '@apollo/client/core/core.cjs',
}

try {
  replace(options).then((results) => {
    console.log('Replacement results:', results)
  })
} catch (error) {
  console.error('Error occurred:', error)
}
