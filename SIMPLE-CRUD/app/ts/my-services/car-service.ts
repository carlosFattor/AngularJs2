import {ICar} from '../interfaces/ICAR';
import {Cars} from './mocks/mocks-car';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import "rxjs/Rx";

export class CarService {
    getCars():Promise<ICar[]>{
        return new Promise<ICar[]>(resolve => setTimeout(() => resolve(Cars), 1000));
    }
    
    getCar(id: number): Promise<ICar> {
        return Promise.resolve(Cars.filter(function(car){
            return car.id === id;
        })[0])
    }
}