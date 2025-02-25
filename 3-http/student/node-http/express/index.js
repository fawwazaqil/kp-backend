const express = require('express');
const app = express();
const PORT = 4000;
const path = require("node:path");

//home route (akan ada issue, sebab .write() tanpa  .end()), which led to client keep loading indefinetely)
app.get("/",function(req,res){
    return res.status(200).write("<h1>Welcome to home page</h1>");
});

//about route
app.get("/about",function(req,res){
    return res.redirect("https://marathonview.net/marathon-results-of-Muhammad-Fawwaz-Aqil-Bin-Ahmad-Fairuz");
});
app.listen(PORT,function(){
    console.log(`server is running on port ${PORT}`);;
});


//redirect to pathNotFoundPage
// Define absolute path to `notFound.html` file (used from prev example)

// // Method1: __dirname from node.js
// const notFoundPath = path.join(__dirname,"..","pages","notFound.html");
// app.get("*",function(req,res){
//     return res.status(404).sendFile(notFoundPath);
// });
// Method2: When you know absolute path
const notFoundPath = "path_until_html_file";
app.get("*",function(req,res){
    return res.status(404).sendFile(notFoundPath);
});