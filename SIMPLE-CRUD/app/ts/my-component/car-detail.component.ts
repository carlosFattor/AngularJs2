import {Component} from 'angular2/core';
import {ICar} from '../interfaces/ICar';

@Component({
    selector: 'car-detail',
    templateUrl: 'app/views/car-detail.html',
    inputs: ['car']
})
export class CarDetailComponent {
    public car: ICar;
}