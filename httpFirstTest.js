const {createServer} = require('http')

console.log("Server Started")

const server = createServer((received, back) =>{ //received = resquest to server || back = response from server 
    if(received.url === '/'){
        back.write(`This is the Home Page`)
    }else if(received.url === '/about'){
        back.write(`This is the about Page`)
    }else{
        //default method  for 404 
    back.write(`404, Page does not exist`)
    }

    back.end()
})

server.listen(9000)