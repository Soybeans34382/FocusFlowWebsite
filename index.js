const http = require("http")
const path = require("path")
const fs = require("fs")


const server = http.createServer((req,res)=> {
    if (req.url === "/"){
        fs.readFile(path.join(__dirname,"index.html"),(err,data) => {
            if (err) {
                res.end("error")
            } else {
                res.end(data)
            }
        })
    }else  if (req.url === "/api"){
        fs.readFile(path.join(__dirname,"db.json"),(err,data) => {
            if (err) {
                res.end("error")
            } else {
                res.end(data)
            }
        })

    }else if (req.url.startsWith("/images/")) {
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
        if (err) { res.writeHead(404); res.end("not found"); return }
        res.writeHead(200)
        res.end(data)
    })
    }

})



server.listen(5959,() => console.log("lisening"))
