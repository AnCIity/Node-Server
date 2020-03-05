const url = require("url")
const route = require("./route")
const static = require("./static")

// TODO: 考虑进一步统一目录  参考VUE
// TODO: 进一步避免 error

module.exports = function (request, response) {

    // 获取访问路径
    let { pathname } = url.parse(request.url)

    // 检测路由
    if (route.test(pathname, response)) return;

    // 静态资源
    static(pathname, response)

    //  TODO: 接口
    //  TODO: 判断访问类型

}

