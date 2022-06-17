function linearSearch(arr: Array <number>, element: number ): object | string {
  for (let i:number = 0; i < arr.length; i++) {
    if (arr[i] === element) return {position: i, element}
  }
  return "Element not found in array"
}

const getElement = linearSearch([10, 20, 30, 49, 39, 89], 49)

console.log(getElement);
