function linearSearch(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element)
            return { position: i, element: element };
    }
    return "Element not found in array";
}
var getElement = linearSearch([10, 20, 30, 49, 39, 89], 49);
console.log(getElement);
