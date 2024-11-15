"use strict";
{ //larning function
    // Normal function
    // Arrow function 
    function add(num1, num2) {
        if (num2 === void 0) { num2 = 10; }
        return num1 + num2;
    }
    add(24, 22);
    var addArrow = function (num1, num2) { return num1 + num2; };
    addArrow(10, 7);
    // object // function , method
    var poorUser = {
        name: 'khan',
        balance: 5,
        addBalance: function (balance) {
            return "my new balance is:  ".concat(this.balance + balance);
        }
    };
    var arr = [20, 14, 10];
    var arayMap = arr.map(function (sum) { return sum + sum; });
}
