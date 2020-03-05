const anRoute = require("./an-route")

module.exports = new anRoute([
    {
        name: "home",
        route: "/",
        path: "./views/index.html"
    },
    {
        name: "about",
        route: "/about",
        path: "./views/about.html"
    },
])