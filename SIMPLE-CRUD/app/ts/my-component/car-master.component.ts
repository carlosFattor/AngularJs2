import {Component} from 'angular2/core';
import {ICar} from '../interfaces/ICar';
import {CarDetailComponent} from './car-detail.component';
import {CarService} from '../my-services/car-service';
import {OnInit} from 'angular2/core'
@Component({
  selector: 'car-master',
  templateUrl:'./app/views/cars-master.html',
  directives: [CarDetailComponent],
  providers: [CarService]
})

export class CarComponent implements OnInit {
    public title: String = "Cadastro de veiculos";
    public cars: ICar[];
    public selectedCar: ICar;
    
    constructor(private _carService: CarService){}
    ngOnInit(){
        this._carService.getCars()
            .then(cars => this.cars = cars);
    }
    public onSelect(car: ICar): void {
        this.selectedCar = car;
    }
}