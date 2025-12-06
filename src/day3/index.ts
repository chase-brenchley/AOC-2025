export function partA(input: string): string[] {
  // Implement Part A logic for Day 3 here
  const lines = input.trim().split('\n')

  let sum = 0
  for (const line of lines) {
    sum += findBiggest(line)
  }

  return [`${sum}`];
}

export function partB(input: string): string[] {
  // Implement Part B logic for Day 3 here
  const lines = input.trim().split('\n')

  let sum = 0
  for (const line of lines) {
    sum += parseInt(foo(line))
  }

  return [`${sum}`];
}

export const findBiggest = (input: string): number => {
  let biggest = 0
  let tens = 0
  let ones = 0

  for (let [index, digit] of Array.from(input).entries()) {
    let parsed = parseInt(digit)

    if (parsed > tens && index !== input.length - 1) {
      tens = parsed
      ones = 0
      continue
    }

    if (parsed > ones) {
      ones = parsed
      continue
    }
  }

  biggest = tens * 10 + ones

  return biggest
}

export const findBiggestPart2 = (input: string): number => {
  let biggest = 0

  const numArray = input.split('').map(a => parseInt(a))

  // // find max number
  // const max2 = Math.max(...numArray)
  // // see if there are 12 numbers after
  // const maxIdx2 = numArray.indexOf(max2)

  // if (maxIdx2 <= numArray.length - 12) {
  //   return parseInt(input.substring(maxIdx2, maxIdx2 + 12))
  // }

  // const sorted = Array.from(input).sort()
  // sorted.slice()
  const max = getMaxFromEligible(input)
  const maxIdx = numArray.indexOf(max)
  const newArray = numArray.slice(maxIdx)

  // now find numbers to remove, we need to remove enough to get to 12
  const numToRemove = newArray.length - 12
  // make a list of the lowest numbers equal to numToRemove
  const removeList = [...newArray].sort().slice(0, numToRemove)

  let newNum = newArray.filter((val) => {
    if (removeList.includes(val)) {
      removeList.splice(removeList.indexOf(val), 1)
      return false
    }

    return true
  })

  if (newNum.length !== 12) {
    throw new Error('length was not 12!')
  }

  biggest = parseInt(newNum.join(''))

  return biggest
}

export const getMaxFromEligible = (input: string): number => {
  const eligibles = input.substring(0, input.length -11)

  const numArray = eligibles.split('').map(a => parseInt(a))

  const max = Math.max(...numArray)

  return max
}

export const foo = (input: string, length: number = 11): string => {
  if (length === -1) {
    return ''
  }
  // find the max number with 11 remaining after
  let max = 0
  for (let i = 0; i < input.length - length; i++) {
    let parsed = parseInt(input[i])
    max = parsed > max ? parsed : max
  }
  const newInput = input.substring(input.indexOf(`${max}`) + 1)

  return `${max}` + foo(newInput, length-1)
}
