// Create web server

var http = require("http");
var fs = require("fs");

// Create server
http.createServer(function(req, res) {
    // Read file
    fs.readFile("comments.html", function(err, data) {
        // Write response
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8080, " localhost");

console.log("Server running at http://localhost:8080/");