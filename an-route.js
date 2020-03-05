const fs = require("fs")

class route {
    constructor(routes) {
        this.routes = routes;
    }

    test(url, response) {
        let result = false
        this.routes.forEach(value => {
            if (url === value.route) {
                response.end(fs.readFileSync(value.path));
                result = true;
            }
        })

        return result
    }
}

module.exports = route