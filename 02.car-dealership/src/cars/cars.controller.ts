import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe) // coloco la validacion de pipes a nivel de controlador para que se aplique en cada uno de los metodos por el principio DRY Dont repete your self
export class CarsController {
    constructor( private readonly carsService:CarsService ){}

    @Get()
    getAllCars(){
        return this.carsService.findAllCars();
    };

    @Get(':id')
    getCarById( @Param('id', new ParseUUIDPipe({version:'4'})) id:string ){ // en este caso espesificamos la version de uuid que vamos a utilizar. Por default en la importacion puse v4.
        console.log(id);
        return this.carsService.findCarsById(String(id));
    };
    
    @Post()
    createCar(@Body() createcarDto: CreateCarDto ){
        return this.carsService.createCar(createcarDto);
    };

    @Patch(':id')
    updateCar(@Param('id', ParseUUIDPipe ) id:string, @Body() updateCarDto:UpdateCarDto ){
        return this.carsService.updateCar( id, updateCarDto );
    };

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe ) id:string ){
        return this.carsService.deleteCar(id)
    };

};



