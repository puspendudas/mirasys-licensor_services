import { LicenseController } from "@/controllers/license.controller";
import { Routes } from "@/interfaces/routes.interface";
import { Router } from "express";

export default class LicenseRoute implements Routes {
    public path = '/api/v1/licenses';
    public router = Router(); 
    
    private controller = new LicenseController();
    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(`${this.path}`, this.controller.createLicense);
    }
}