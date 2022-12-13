import { LicenseDto } from '@/dtos/license.dto';
import { NextFunction, Request, Response } from 'express';
import CryptoJS from 'crypto-js';
export class LicenseController {
    public createLicense = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Create license");
        let license = await this.generateLicense(req.body);
        // console.log(license);
        // base64 encode the license
        let licenseString = JSON.stringify(license);
        let licenseBase64 = Buffer.from(licenseString).toString('base64');
        res.header('Content-Type', 'text/plain');
        res.header('Content-Disposition', 'attachment; filename="license.lic"');
        res.send(licenseBase64);
    }

    private async generateLicense(license: LicenseDto) {
        let licenseString = license.machineId + license.maxUsers + license.isTrial.toString() + license.expires.toString() + license.maxCameras.toString() + license.assignmentSupport.toString() + license.communicationsSupport.toString();
        let licenseHash = CryptoJS.SHA256(licenseString).toString();
        return {
            ...license,
            signature: licenseHash
        }
    }
}