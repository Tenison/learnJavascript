//import http inbuilt module from node.
const {createServer} = require('http')

//Always look at things from the servers point of VIEW.. Serving Files and Data!!!


//createServer start a new webserver and returns an object
const server = createServer((received, back) =>{ //received = request and back = response
    back.write("Hii web")
    back.end()

    //or
    back.end("Hii web")
})


//OUTPUT Object
console.log(server)
/** 
Server {
  maxHeaderSize: undefined,
  insecureHTTPParser: undefined,
  _events: [Object: null prototype] {
    request: [Function (anonymous)],
    connection: [Function: connectionListener]
  },
  _eventsCount: 2,
  _maxListeners: undefined,
  _connections: 0,
  _handle: null,
  _usingWorkers: false,
  _workers: [],
  _unref: false,
  allowHalfOpen: true,
  pauseOnConnect: false,
  httpAllowHalfOpen: false,
  timeout: 0,
  keepAliveTimeout: 5000,
  maxHeadersCount: null,
  headersTimeout: 60000,
  requestTimeout: 0,
  [Symbol(IncomingMessage)]: [Function: IncomingMessage],
  [Symbol(ServerResponse)]: [Function: ServerResponse],
  [Symbol(kCapture)]: false,
  [Symbol(async_id_symbol)]: -1
}
*/

// add a listen parameter _connectionKey: '6::::8000' to server object 
server.listen(8000)


