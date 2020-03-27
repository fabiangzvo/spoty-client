
module.exports = {
  env: {
    clientID: "5d66dc849f5446c7b55480f1373773bf",
    linkRedirect: ((process.env.NODE_ENV === 'production') ? "https://spoty-client.now.sh" : 'http://localhost:3000')
  }
}