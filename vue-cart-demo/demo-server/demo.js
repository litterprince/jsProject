let http = require('http');
let url = require('url');
let util = require('util');

let server = http.createServer((req, res)=>{
    res.StatusCode = 200;
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.end(util.inspect(url.parse(req.url)));
});

server.listen(3000, '127.0.0.1', ()=>{
    console.log("服务启动成功，请打开浏览器，输入地址http://127.0.0.1:3000 访问")
});
