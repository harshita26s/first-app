var url = 'hhtp://mylogger.io/log';  //private

function log(message) {
 // send an http request 
    console.log(message);
}

module.exports.log = log; // public
// module.exports.url = url; // to expot url

 