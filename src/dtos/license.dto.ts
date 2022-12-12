import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";

export class LicenseDto {
    @IsString()
    public machineId: string;
    
    @IsDate()
    public expires: string;

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