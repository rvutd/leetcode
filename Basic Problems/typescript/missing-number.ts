function findMissingNumber1(numArray: Array<number>): number | null {
  let mn:number = 0
  
  for (let i = 1; i < numArray.length; i++) {
    
    if (i in numArray) {
      console.log(numArray[i], i);
      continue
    } else {
      mn = i
    }
  }
  
  return mn
}

function findMissingNumber(numArray: Array<number>): number | null {
  const sum: number = numArray.reduce((first: number, next: number) => {
    return first + next
  }, 0)
  
  if (55 - sum === 0) return null

  // Missing Number
  return 55 - sum
}

const numArray: Array<number> = [1, 2, 4, 5, 6, 7, 8, 9, 10]


console.log(findMissingNumber1(numArray));