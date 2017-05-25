var http=require('http');
const util = require('util');

function start(message){
    function onRequest(request, response){
        console.log("Request received");
        response.writeHead(200,{"Content-type":"text/plain"});
        response.write(message);
        util.log('Timestamped message.');
        util.log(message);
        response.end();

    }
    http.createServer(onRequest).listen(3000)
    console.log('listening on *:3000');
}
exports.start=start;
