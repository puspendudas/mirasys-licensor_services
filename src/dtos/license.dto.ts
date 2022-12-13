import { IsBoolean, IsNumber, IsString } from "class-validator";

export class LicenseDto {
    @IsString()
    public machineId: string;
    
    @IsNumber()
    public expires: number;

    @IsBoolean()
    public isTrial: boolean;

    @IsNumber()
    public maxUsers: number;

    @IsNumber()
    public maxCameras: number;

    @IsBoolean()
    public assignmentSupport: boolean;

    @IsBoolean()
    public communicationsSupport: boolean;
    
}