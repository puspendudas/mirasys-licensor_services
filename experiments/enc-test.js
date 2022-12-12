import fs from 'fs';
import path from 'path';
import CryptoJS from 'crypto-js';
import config from '../config.js';

const pubKey = fs.readFileSync(path.join(__pwd,"../keys", 'public-key.pem'), 'utf8');
const privKey = fs.readFileSync(path.join(__pwd,"../keys", 'private-key.pem'), 'utf8');
console.log(pubKey);
console.log(privKey);

async function encrypt(message) {
    const encrypted = CryptoJS.AES.encrypt(message, config.seed);
    return encrypted.toString();
}