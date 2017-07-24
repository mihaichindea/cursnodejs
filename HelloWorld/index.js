/*HelloWorld in Node.js*/
"use strict";

var iPort = 8081;
var mHttp = require("http");

var sMessage = "HelloWorld";

var oResponse = {
    "returnCode" : "1",
    "returnMessage" : "Everything OK",
    "returnData" : null
}

var oServer = mHttp.createServer(function(req, res){
    console.log("Request received");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(JSON.stringify(oResponse));
    res.end();
});
oServer.listen(iPort);

console.log(sMessage);