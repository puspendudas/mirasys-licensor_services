import config from "../config.js";
const { MD5 } = require("crypto-js");

// MD5

;(() => {
    let prefix = "0abcd";
    let hash = MD5(Math.random().toString());
    while (!hash.toString().startsWith(prefix)) {
        hash = MD5(Math.random().toString());
    }
    console.log(hash.toString());
})();