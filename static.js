const path = require("path")
const fs = require("fs")

module.exports = function (url, response) {
    let filename = path.join(__dirname, "public", url)

    // 根据文件后缀，设置响应数据类型
    let contentType;
    switch (path.extname(filename)) {
        case ".js":
            contentType = "text/javascript"
            break;
        case ".css":
            contentType = "text/css"
            break;
        default:
            break;
    }

    if (contentType) response.setHeader("content-type", contentType)

    response.end(fs.readFileSync(filename))
}