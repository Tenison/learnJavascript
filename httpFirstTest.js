const {createServer} = require('http')

const server = createServer((received, back) =>{ //received = resquest to server || back = response from server
    if(received.url === '/'){
        back.write(`<h4>Home Page </h4>`)
        back.end()
    }
    
    //default method  for 404 
    back.write(`<h4> 404, Page does not exist </h4>`)
    back.end()
})

server.listen(9000)