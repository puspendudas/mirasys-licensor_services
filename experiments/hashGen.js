// import config from "../config.js";
const CryptoJs = require("crypto-js");


;(() => {
    let pass = "jhgsajhdgjhasgdhjghjsadhgjdasghjasdghjadgshjdashgjasdghjdasghjdasghjdashjgashjgadhsjghjdagjhdasghjasdghjadhjg";
    let message = "Hello World saodjaskldj askdjkl ;sadkl asd askl;d jslak ;dklasj l;ksdajlkd;sajdl;skajasd l;k ;l kasjl;kdsa ksad jklsad lkjasd kljjkld sa kljasdljasd kjlasd klasd jklasd jkljklad slk jdasljk 123";
    let encrypted = CryptoJs.AES.encrypt(message, pass);
    console.log(encrypted.toString());
    let decrypted = CryptoJs.AES.decrypt(encrypted, pass);
    console.log(decrypted.toString(CryptoJs.enc.Utf8));
})();