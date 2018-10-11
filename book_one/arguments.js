var sum = function () {
    var i, total = 0;
    for (i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
};

console.log(sum(1,2,3,4,5,6));
var args = Array.prototype.slice.call(arguments);
// console.log(typeof arguments); object