
const funcOne = (name) =>{
    console.log("Welcome, " + name)
}


const funcTwo = (callback) =>{
    console.log("function Two started")
    callback()
}

/**
 * 
 */
const funcFour = () =>{
    console.log("This is the end of the road")
}

funcOne("Osei")

funcTwo(()=>{
    console.log("Process running !!!")
})

funcFour()

