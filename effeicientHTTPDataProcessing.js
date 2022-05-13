//An effeicient way of receiving HTTP response Data
//imagine receiving huge data from an AJAX call..check last two lines
//how do we handle that to preventing blocking in the event loop (THread Pool/Task Queue)

var res = [];
// `response(..)` receives array of results from the Ajax call
function response(data) {
    // let's just do 1000 at a time
    var chunk = data.splice( 0, 1000 ); ///IMPORTANT****

    // add onto existing `res` array
    res = res.concat(
        // make a new transformed array with all `chunk` values doubled
        chunk.map(function(val){
            return val * 2;
        })
    );
    
    // anything left to process?     ///IMPORTANT****
    if (data.length > 0) {
        // async schedule next batch
        setTimeout( function(){
            response( data )
        }, 0);
    }
} 

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );