const http = require('http')

http.createServer(function (req, res) {
    // set header
    res.writeHead(200, { 'Content-Type': 'application/json' })

    // send out data
    res.end(`
       {
           "name": "Uchenna Anya",
           "country": "Nigeria",
           "hobby": "Teaching"
    }
    `)
}).listen(4000, '127.0.0.1')
console.log("Server started at port 4000")