const http = require("http")

const server = http.createServer((req, res) => {
    const url = req.url
    if(url === '/') {
        res.writeHead(200, {"content-type": "text/html"})
        res.write("<h1>Welcome to our Home Page</h1>")
        res.end()
        console.log("User hit home page");
    }
    else if(url === '/about') {
        res.writeHead(200, {"content-type": "text/html"})
        res.write("<h1>About page</h1>")
        res.end()
        console.log("User hit about page");
    }
    else if(url === '/contact') {
        res.writeHead(200, {"content-type": "text/html"})
        res.write("<h1>Contact us</h1>")
        res.end()
        console.log("User hit contact page");
    }
    else {
        res.writeHead(404, {"content-type": "text/html"})
        res.write("<h1>Error page</h1>")
        res.end()
        console.log("User hit error page");
    }
})

server.listen(5000)