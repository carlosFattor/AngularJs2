import {Component} from 'angular2/core'
import {ICar} from '../interfaces/ICar'
import {CarDetailComponent} from './car-detail.component'

@Component({
  selector: 'my-car',
  templateUrl:'./app/views/cars-master.html',
  directives: [CarDetailComponent]
})

export class CarComponent {
    public title: String = "Cadastro de veiculos";
    public cars: ICar[] = Cars;
    public selectedCar: ICar;
    
    public onSelect(car: ICar): void {
        this.selectedCar = car;
    }
}

var Cars: ICar[] = [
    { id: 1, brand: "BMW", model: "X6" },
    { id: 2, brand: "BMW", model: "X1" },
    { id: 3, brand: "Volkswagen", model: "Golf GTI" },
    { id: 4, brand: "Chevrolet", model: "Cruze" },
    { id: 5, brand: "Ford", model: "Fusion" },
    { id: 6, brand: "Fiat", model: "Bravo" },
    { id: 7, brand: "Mercedes", model: "C180" }
]