const path = require("path");

module.exports = {
  langs: ["fr"],
  port: 8080,
  dest: {
    distPath: path.resolve(__dirname, "..dist/root"),
    locales: "dist",
    tmp: ".tmp"
  },
  src: {
    appPath: path.resolve(__dirname, "../src"),
    indexHtml: "./src/index.html",
    locales: "./src/**/locales-",
    entries: {
      app: ["./src/main.ts"]
    }
  }
};
