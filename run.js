const http = require("http")
const app = require("./app")

http
    .createServer((request, response) => {
        // 添加跨域响应头
        response.setHeader("Access-Control-Allow-Origin", "*");

        // 屏蔽 favicon.ico
        if (request.url === "/favicon.ico") return;

        // 开始 APP 程序
        app(request, response)
    })
    .listen(3000, () => {
        console.log("server run at port http://127.0.0.1:3000");
    })

