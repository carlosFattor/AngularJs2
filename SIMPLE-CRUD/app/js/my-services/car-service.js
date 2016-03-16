System.register(['./mocks/mocks-car', "rxjs/Rx"], function(exports_1) {
    var mocks_car_1;
    var CarService;
    return {
        setters:[
            function (mocks_car_1_1) {
                mocks_car_1 = mocks_car_1_1;
            },
            function (_1) {}],
        execute: function() {
            CarService = (function () {
                function CarService() {
                }
                CarService.prototype.getCars = function () {
                    return new Promise(function (resolve) { return setTimeout(function () { return resolve(mocks_car_1.Cars); }, 1000); });
                };
                CarService.prototype.getCar = function (id) {
                    return Promise.resolve(mocks_car_1.Cars.filter(function (car) {
                        return car.id === id;
                    })[0]);
                };
                return CarService;
            })();
            exports_1("CarService", CarService);
        }
    }
});
//# sourceMappingURL=car-service.js.map