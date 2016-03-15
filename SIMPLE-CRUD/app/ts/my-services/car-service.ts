import {ICar} from '../interfaces/ICAR';
import {Cars} from './mocks/mocks-car';

export class CarService {
    getCars():Promise<ICar[]>{
        return new Promise<ICar[]>(resolve => setTimeout(() => resolve(Cars), 2000));
    }
}