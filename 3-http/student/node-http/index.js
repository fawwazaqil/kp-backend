const fs = require("node:fs");
const path = require("node:path");
const http = require("node:http");
let visitorCount = 0;

const server = http.createServer(function(req,res){
    // Helps to see what is happening in req and res in CLI (Terminal)
    const url = req.url;
    console.log(url);

    
    console.log(`Visitor count: ${visitorCount}`);

    // req and res on "/", "/contact" and other
    if (url == "/contact") {
    visitorCount++;
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify({
        data:"Welcome to /contact! Hello from node js server"
    }));
    // to make "redirection"
    } else if (url == "/") {
        visitorCount++;
        res.writeHead(200,{'Location':'https://marathonview.net/marathon-results-of-Muhammad-Fawwaz-Aqil-Bin-Ahmad-Fairuz'})
        res.end(JSON.stringify({
            data:"Welcome to index!"
    }));

    } else if (url == "/about") {
        visitorCount++;
        res.writeHead(301,{Location:"https://marathonview.net/marathon-results-of-Muhammad-Fawwaz-Aqil-Bin-Ahmad-Fairuz"})
        res.end();
    }
    else {
        const pathNotFoundPage = path.join("pages","notFound.html" );
        const notFoundPage = fs.readFileSync(pathNotFoundPage);
        res.writeHead(404,{'Content-Type':'text/html;charset=utf-8'})
        res.end(notFoundPage);
    }
});



// accept two parameters (req and res)
const PORT = 3000;
server.listen(PORT,function(){
    console.log(`Server is running on port ${PORT}`);
});

// create a new /contact route and respond with a JSON object
