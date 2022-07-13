function findMissingNumber1(numArray) {
    var mn = 0;
    for (var i = 1; i < numArray.length; i++) {
        if (i in numArray) {
            console.log(numArray[i], i);
            continue;
        }
        else {
            mn = i;
        }
    }
    return mn;
}
function findMissingNumber(numArray) {
    var sum = numArray.reduce(function (first, next) {
        return first + next;
    }, 0);
    if (55 - sum === 0)
        return null;
    // Missing Number
    return 55 - sum;
}
var numArray = [1, 2, 4, 5, 6, 7, 8, 9, 10];
console.log(findMissingNumber1(numArray));
