import { LicenseController } from "@/controllers/license.controller";
import { LicenseDto } from "@/dtos/license.dto";
import { Routes } from "@/interfaces/routes.interface";
import validationMiddleware from "@/middlewares/validation.middleware";
import { Router } from "express";

export default class LicenseRoute implements Routes {
    public path = '/api/v1/licenses';
    public router = Router(); 
    
    private controller = new LicenseController();
    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(`${this.path}`, validationMiddleware(LicenseDto, "body"), this.controller.createLicense);
    }
}