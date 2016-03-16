import {Component, OnInit} from 'angular2/core';
import {ICar} from '../interfaces/ICar';
import {Route, RouteParams} from 'angular2/router';
import {CarService} from '../my-services/car-service';

@Component({
    templateUrl: 'app/views/car-detail.html'
})
export class CarDetailComponent implements OnInit{
    constructor(private _routeParams: RouteParams, private _carService: CarService){}
    ngOnInit(){
        let id = <number><any> this._routeParams.get("id");
        this._carService.getCar(id).then(car => this.car = car);
    }
    public car: ICar;
}