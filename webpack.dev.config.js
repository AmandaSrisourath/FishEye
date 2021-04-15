let path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/main.js",
        modal: "./src/modal.js",
        "photographer-detail": ["./src/photographer-detail.js"]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].js",
    },
    watch: true,
    devtool: "source-map",
};