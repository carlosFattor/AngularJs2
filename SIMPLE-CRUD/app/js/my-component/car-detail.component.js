System.register(['angular2/core', 'angular2/router', '../my-services/car-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, car_service_1;
    var CarDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            }],
        execute: function() {
            CarDetailComponent = (function () {
                function CarDetailComponent(_routeParams, _carService) {
                    this._routeParams = _routeParams;
                    this._carService = _carService;
                }
                CarDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    this._carService.getCar(id).then(function (car) { return _this.car = car; });
                };
                CarDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/views/car-detail.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, car_service_1.CarService])
                ], CarDetailComponent);
                return CarDetailComponent;
            })();
            exports_1("CarDetailComponent", CarDetailComponent);
        }
    }
});
//# sourceMappingURL=car-detail.component.js.map