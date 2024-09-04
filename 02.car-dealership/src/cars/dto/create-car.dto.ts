import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
    
    @IsString()
    readonly brand: string;
    
    @IsString()
    @MinLength(3, { message: 'tiene al menos 3 o mas caracteres'})
    readonly model:string;
};

