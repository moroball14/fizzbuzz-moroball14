"use strict";
exports.__esModule = true;
exports.Counter = void 0;
var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.prototype.oneToHundred = function () {
        for (var i = 1; i <= 100; i++) {
            console.log(i);
        }
        ;
    };
    ;
    return Counter;
}());
exports.Counter = Counter;
;
var counter = new Counter();
counter.oneToHundred();
