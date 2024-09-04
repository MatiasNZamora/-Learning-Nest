import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {
    
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly brand?: string;
    
    @IsString()
    @IsOptional()
    @MinLength(3, { message: 'tiene al menos 3 o mas caracteres'})
    readonly model?:string;
};