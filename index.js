const proxy = require("./proxy/index3");
console.log(proxy.latestBrowser);
proxy.latestBrowser = 70;
console.log(proxy.latestBrowser);
