"use strict";
exports.__esModule = true;
exports.Counter = void 0;
var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.prototype.outputFizzBuzz = function () {
        for (var i = 1; i <= 100; i++) {
            if (i % (3 * 5) === 0) {
                console.log("Fizz Buzz");
            }
            else if (i % 3 === 0) {
                console.log("Fizz");
            }
            else if (i % 5 === 0) {
                console.log("Buzz");
            }
            else {
                console.log(i);
            }
        }
        ;
    };
    ;
    return Counter;
}());
exports.Counter = Counter;
;
var counter = new Counter();
counter.outputFizzBuzz();
