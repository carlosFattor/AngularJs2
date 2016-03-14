System.register(['angular2/platform/browser', './my-component/car-master.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, car_master_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (car_master_component_1_1) {
                car_master_component_1 = car_master_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(car_master_component_1.CarComponent);
        }
    }
});
//# sourceMappingURL=main.js.map