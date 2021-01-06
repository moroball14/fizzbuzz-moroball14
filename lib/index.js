"use strict";
exports.__esModule = true;
exports.Counter = void 0;
var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.prototype.outputOneToHundred = function () {
        for (var i = 1; i <= 100; i++) {
            console.log(this.returnFizzBuzz(i));
        }
        ;
    };
    ;
    Counter.prototype.returnFizzBuzz = function (number) {
        var result;
        if (number % (3 * 5) === 0) {
            result = "Fizz Buzz";
        }
        else if (number % 3 === 0) {
            result = "Fizz";
        }
        else if (number % 5 === 0) {
            result = "Buzz";
        }
        else {
            result = number;
        }
        ;
        return result;
    };
    ;
    return Counter;
}());
exports.Counter = Counter;
;
var counter = new Counter();
counter.outputOneToHundred();
