//control of flow
//callback fucntion to control and modify data before passing into callback function 
function execfunc(data, callback){
    //modify data
    data += 1
    //then pass into callback function 
    callback(data)
}

//--- callback based on events [click, timeout, etc]
//using async callback
//calling through eventloop [functions are called only when the main call stack is done executing]
addEventListener()
setInterval()
setTimeout()

/// Look into JOBS ticks
