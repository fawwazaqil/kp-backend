import path from "node:path";
import fs from "node:fs";

function home (req,res) {

    const homeHtmlPath = path.resolve("pages","index.html");
    const homeHtml = fs.readFileSync(homeHtmlPath,"utf-8");
    res.send(homeHtml);
    res.end();
};

function users (req,res) {
    const username = req.params.username;
    const userHTMLpath = path.resolve("pages","user.html");
    const userHTML = fs.readFileSync(userHTMLpath,"utf-8");
    const newUser = username.replaceAll("-"," ");
    console.log(req.params);
    // render user.html by using the parameter from the route
    const modifiedHTML = userHTML.replace("{{username}}",newUser);
    res.send(modifiedHTML);
    res.end();
}

function search(req,res){
    const query = req.query;
    res.send(`<pre>${JSON.stringify(query,null,2)}</pre>`);
}

function notFound(req,res){
    const notFoundHTMLpath = path.resolve("pages","error404.html");
    const notFoundHTML = fs.readFileSync(notFoundHTMLpath,"utf-8");
    res.setHeader("Content-Type","text/html");
    res.status(404).send(notFoundHTML);
    res.end();
}

const controllers = {
    home,
    users,
    search,
    notFound,
}

export default controllers;