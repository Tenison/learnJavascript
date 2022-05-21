
////////////////example One - (Call Stack and event queue)
setTimeout(()=>{
    console.log("hope I start")//this will run on the event loop queue
},0)

outputNumbers = () =>{
    for(let i = 0; i <= 1000; i++)
        console.log(i)
}

outputNumbers()// this will run on the main call stack


////////////////example Two - (Run both on event queue)
setTimeout(()=>{
    console.log("hope I start")//this will run on the event loop queue(FIFO)
},0)

outputNumbers = () =>{
    for(let i = 0; i <= 1000; i++)
        console.log(i)
}

setTimeout(outputNumbers,0)//this will run on the event loop queue(LILO) last-in last-out