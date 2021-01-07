"use strict";
exports.__esModule = true;
exports.Counter = void 0;
var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.prototype.outputOneToHundred = function () {
        var fizzbuzz = '';
        for (var i = 1; i <= 100; i++) {
            fizzbuzz += this.returnFizzBuzz(i) + ",";
        }
        ;
        console.log(this.formatFizzBuzz(fizzbuzz));
    };
    ;
    Counter.prototype.returnFizzBuzz = function (number) {
        var result;
        if (number % 15 === 0) {
            result = "Fizz Buzz";
        }
        else if (number % 3 === 0) {
            result = "Fizz";
        }
        else if (number % 5 === 0) {
            result = "Buzz";
        }
        else {
            result = number.toString();
        }
        ;
        return result;
    };
    ;
    Counter.prototype.formatFizzBuzz = function (result) {
        return result.slice(0, -1);
    };
    return Counter;
}());
exports.Counter = Counter;
;
var counter = new Counter();
counter.outputOneToHundred();
