import { LicenseDto } from '@/dtos/license.dto';
import { NextFunction, Request, Response } from 'express';
import CryptoJS from 'crypto-js';
import { License } from '@/services/license.service';
export class LicenseController {
    public createLicense = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Create license");
        let license = await this.generateLicense(req.body);
        // console.log(license);
        // base64 encode the license
        res.header('Content-Type', 'text/plain');
        res.header('Content-Disposition', 'attachment; filename="license.lic"');
        res.send(license);
    }

    private async generateLicense(license: LicenseDto) {
        let lic = new License();
        let data = lic.encryptLicense(license);
        return data;
        // let licenseString = license.machineId + license.maxUsers + license.isTrial.toString() + license.expires.toString() + license.maxCameras.toString() + license.assignmentSupport.toString() + license.communicationsSupport.toString();
        // let licenseHash = CryptoJS.SHA256(licenseString).toString();
        // return {
        //     ...license,
        //     signature: licenseHash
        // }
    }
}