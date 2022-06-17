function linearSearch(arr, element) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return {i, element}
  }
}

const getElement = linearSearch([10, 20, 30, 49, 39, 89], 49)

console.log(getElement.element, "was found at position", getElement.i);