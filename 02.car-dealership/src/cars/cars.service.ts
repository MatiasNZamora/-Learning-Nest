import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'; 
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    
    private cars:Car[] = [
        // {
        //     id: uuid(),
        //     brand:'Toyota',
        //     model:'Corolla'
        // },
    ];

    findAllCars(){
        return this.cars;
    };

    findCarsById( id:string ){
        const car = this.cars.find(car => car.id === id);
        if(!car) throw new NotFoundException(`Car with id: ${id} not found`);
        return car;
    };

    createCar( createCarDto:CreateCarDto ){
        const newCar:Car = {
            id:uuid(),
            ...createCarDto
        };
        this.cars.push(newCar);

        return newCar;
    };

    updateCar( id:string, updateCarDto:UpdateCarDto ){
        let carDB = this.findCarsById(id);

        if( updateCarDto.id && updateCarDto.id !== id ){
            throw new BadRequestException(`Car id is not valid inside body`);
        };
        
        this.cars = this.cars.map(car => {
            if (car.id === id ){
                carDB = { ...carDB,  ...updateCarDto, id };
                return car; 
            }
            return car; 
        });
        return; 
    };

    deleteCar( id:string ){
        this.findCarsById(id); // veo si el auto a eliminar existe.
        return this.cars = this.cars.filter(car => car.id !== id);
    };

    fillCarsWithSeedData( cars: Car[] ){
        this.cars = cars;
    };

};
