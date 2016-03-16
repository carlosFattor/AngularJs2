import {Component} from 'angular2/core';
import {ICar} from '../interfaces/ICar';
import {CarDetailComponent} from './car-detail.component';
import {CarService} from '../my-services/car-service';
import {OnInit} from 'angular2/core'
import {Router} from 'angular2/router'

@Component({
  templateUrl:'./app/views/cars-master.html',
  directives: [CarDetailComponent]
})

export class CarComponent implements OnInit {
    public title: String = "Cadastro de veiculos";
    public cars: ICar[];
    
    constructor(private _carService: CarService, private _router: Router){}
    ngOnInit(){
        this._carService.getCars()
            .then(cars => this.cars = cars);
    }
    public onSelect(car: ICar): void {
        this._router.navigate(["CarDetail", {id: car.id}]);
    }
}