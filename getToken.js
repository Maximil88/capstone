const axios = require('axios');
let token

function getToken() {
  if (token) {
    return Promise.resolve(token.token)
  }
  
  let url = 'https://api.artsy.net/api/tokens/xapp_token?'
  url += `client_id=${process.env.ARTSY_CLIENT_ID}&client_secret=${process.env.ARTSY_CLIENT_SECRET}`

  return axios.post(url).then(res => {
    token = res.data
    return token.token
  }).catch(e => {
    console.log(e.response.data)
    console.log(e.request)
    return Promise.reject(e.response.data)
  })
}
module.exports = getToken;