function findMissingNumber(numArray: Array<number>): number | null {
  const sum: number = numArray.reduce((first: number, next: number) => {
    return first + next
  }, 0)
  
  if (55 - sum === 0) return null

  // Missing Number
  return 55 - sum
}

const numArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log(findMissingNumber(numArray));