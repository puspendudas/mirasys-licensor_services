import os from 'os';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import CryptoJs from 'crypto-js';
import { LicenseDto } from '@/dtos/license.dto';

export class License {
    private n = 0xefc8249d;
    private s0 = 0;
    private s1 = 0;
    private s2 = 0;
    private c = 1;

    private publicKey = `-----BEGIN PUBLIC KEY-----
MIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAy6gIakpim5duG3etStZh
sRSXM5LOczRNVzgk2ZgSx6l2k1m+uB49PWbaFTYcpTRHJrxS3p2odkBDojpS1pyz
ZBeo67nxBof7zTmz2dpZ9KE60uncFE9L7O/8D1Z+6QUgqWKND89YCjhRoV9xQQe9
JYRH1Q1WGD0rfmBq71xDyGW6lO2Uk14Oc9xVXqaTGDVfTti+Eocvchb5snyAN0oi
insCezakSBqAA6fb4GfUCPV0s4MchOzGobQlMys528y+FTMcUF9LNwv8eoikYFmZ
T/UkgR0Iom+KmLcOH9vfHWnvU0jN9NhSqxpD5hpehGK7f3dvwTURE+Cqww3V9hzs
Yrvq0LL1CMcJfleGXnkqkQiP1VRx7tDjqUyj8fvGy/9ThhaOs2/ijJpJC8IaGbr2
CI+FLVOEJmIrWbXFvFhCFSUyhQECZZBukzBgvuZLiH5ehIaH2lClfyvOpZ23jBIh
tt+ZtjhORfXnAwyvjTz1AB25Ylvo9+XV9TkX+ORBDOBxAgMBAAE=
-----END PUBLIC KEY-----`

    private privateKey = `-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----`

    private decryptRsa = (data: string) => {
        let buffer = Buffer.from(data, 'base64');
        let decrypted = crypto.publicDecrypt({
            key: this.publicKey,
            padding: crypto.constants.RSA_PKCS1_PADDING
        }, buffer);
        return decrypted.toString('utf8');
    }

    private encryptRsa = (data: string) => {
        let buffer = Buffer.from(data);
        let encrypted = crypto.privateEncrypt({
            key: this.privateKey,
            padding: crypto.constants.RSA_PKCS1_PADDING
        }, buffer);
        return encrypted.toString('base64');
    }

    private createDecipherKey = (licData: string, machineID: string) => {

        // get md5 hash of license file
        let contents = licData;
        let md5 = CryptoJs.MD5(contents).toString();

        // get first 4 chars of md5 hash        
        let key = md5.substr(0, 4) + machineID;

        // generate password aes
        let password = this.createRandomStringFromSeed(key, 16);
        return password;
    }


    private decryptAes = (licData: string, password: string) => {
        let cipher = CryptoJs.AES.decrypt(licData, password);
        let decrypted = cipher.toString(CryptoJs.enc.Utf8);
        return decrypted;
    }

    private encryptAes = (licData: string, password: string) => {
        let cipher = CryptoJs.AES.encrypt(licData, password);
        let encrypted = cipher.toString();
        return encrypted;
    }

    public encryptLicense = (licData: LicenseDto) => {
        let data = JSON.stringify(licData);
        let encrypted = this.encryptRsa(data);
        let md5Prefix = this.createRandomStringFromSeed(Math.random().toString(), 3, '0123456789abcdef');
        let password = this.createRandomStringFromSeed(md5Prefix + licData.machineId, 20);
        let encryptedAes = this.encryptAes(encrypted, password);
        // let encryptedAes = "  ";
        while (true) {
            let enc = this.createRandomStringFromSeed(Math.random().toString(36), 20)+ encryptedAes
            let md5 = CryptoJs.MD5(enc).toString();
            if (md5Prefix !== md5.substr(0, 3)) {
                continue;
            }
            let data = Buffer.from(enc, "base64");
            // if(enc == data.toString("base64")){
            //     console.log("Yesss");
            // }
            return data;
        }
        // return md5Prefix + encryptedAes;
    }

    // public fingerprint = () => {
    //     let interfaces = os.networkInterfaces();
    //     let licFile = this.licenseFileInfo();
    //     let mac = '';
    //     for (let k of Object.keys(interfaces)) {
    //         let inf = interfaces[k];
    //         if (!inf) {
    //             continue;
    //         }
    //         for (let i of inf) {
    //             if (i.internal) continue;

    //             if (i.mac && i.mac !== '00:00:00:00:00:00') {
    //                 mac += i.mac;
    //                 break;
    //             }
    //         }
    //     }

    //     let cpu = os.cpus();
    //     let cpuId = '';
    //     for (let i of cpu) {
    //         cpuId += i.model;
    //     }

    //     let memory = os.totalmem();

    //     let fingerprint = mac + cpuId + memory + licFile.stat.ino;

    //     return fingerprint;
    // }

    // public licenseFileInfo = () => {
    //     let licensePath = Env.get('LICENSE_DIR');
    //     // ensure license path exists
    //     if (!fs.existsSync(licensePath)) {
    //         fs.mkdirSync(licensePath, { recursive: true });
    //     }
    //     let licenseFile = path.join(licensePath, 'license.bin');
    //     // ensure license file exists
    //     if (!fs.existsSync(licenseFile)) {
    //         fs.writeFileSync(licenseFile, '');
    //     }
    //     // stat license file
    //     let stat = fs.statSync(licenseFile);
    //     return {
    //         path: licensePath,
    //         file: licenseFile,
    //         stat: stat
    //     };
    // }

    // public readLicense = () => {
    //     let license = this.licenseFileInfo();
    //     try {
    //         let licenseData: any = fs.readFileSync(license.file);
    //         // console.log(licenseData);
    //         licenseData = Buffer.from(licenseData, 'base64').toString('ascii');
    //         // base64 decode
    //         licenseData = Buffer.from(licenseData, 'base64').toString('ascii');
    //         console.log(licenseData);
    //         licenseData = JSON.parse(licenseData);
    //         console.log(licenseData);
    //         if (!licenseData.machineId || licenseData.machineId !== this.machineId()) {
    //             return null;
    //         }
    //         return licenseData;
    //     } catch (e) {
    //         console.log(e);
    //         return null;
    //     }
    // }

    // public writeLicense = (licenseData: any) => {
    //     let license = this.licenseFileInfo();
    //     fs.writeFileSync(license.file, licenseData);
    // }

    private createRandomStringFromSeed = (seed: string, length = 16, charset = "0123456789abcdefghijklmnopqrstuvwxyz") => {
        let random = new License();
        random.seed(seed);
        let result = '';
        for (let i = 0; i < length; i++) {
            result += charset.charAt(Math.floor(random.next() * charset.length));
        }
        return result;
    }



    // public machineId = () => {
    //     let lic = new License();
    //     lic.seed(this.fingerprint());


    //     // convert to string char codes
    //     let chars: string[] = [];
    //     for (let i = 0; i < 20; i++) {
    //         let char = String.fromCharCode(Math.floor(this.map(lic.next(), 0, 1, 65, 91)));
    //         chars.push(char);
    //     }

    //     // add dashes
    //     let machineId = '';
    //     for (let i = 0; i < chars.length; i++) {
    //         if (i > 0 && i % 5 == 0) {
    //             machineId += '-';
    //         }
    //         machineId += chars[i];
    //     }
    //     return machineId;
    // }

    private map = function (x: number, in_min: number, in_max: number, out_min: number, out_max: number) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    private mash = (data: string) => {
        data = data.toString();
        for (let i = 0; i < data.length; i++) {
            this.n += data.charCodeAt(i);
            var h = 0.02519603282416938 * this.n;
            this.n = h >>> 0;
            h -= this.n;
            h *= this.n;
            this.n = h >>> 0;
            h -= this.n;
            this.n += h * 0x100000000; // 2^32
        }
        return (this.n >>> 0) * 2.3283064365386963e-10; // 2^-32
    }

    public next = () => {
        let t = 2091639 * this.s0 + this.c * 2.3283064365386963e-10; // 2^-32
        this.s0 = this.s1;
        this.s1 = this.s2;
        return this.s2 = t - (this.c = t | 0);
    }

    public seed = (seed: string) => {
        this.n = 0xefc8249d;
        this.c = 1;
        this.s0 = this.mash(' ');
        this.s1 = this.mash(' ');
        this.s2 = this.mash(' ');

        this.s0 -= this.mash(seed);
        if (this.s0 < 0) {
            this.s0 += 1;
        }
        this.s1 -= this.mash(seed);
        if (this.s1 < 0) {
            this.s1 += 1;
        }
        this.s2 -= this.mash(seed);
        if (this.s2 < 0) {
            this.s2 += 1;
        }
    }

}