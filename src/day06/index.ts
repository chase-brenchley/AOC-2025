export function partA(input: string): any {
  // Implement Part A logic for Day 06 here
  let sum = 0
  for (const line of parseInput(input)) {
    sum += processInput(line)
  }

  return sum
}

export function partB(input: string): any {
  // Implement Part B logic for Day 06 here
  // let sum = 0
  // for (const line of parseInputB(input)) {
  //   sum += processInput(line)
  // }

  // return sum
  return parseInputB(input)
}

export const parseInput = (input: string): string[][] => {
  const parsed = []

  const lines = input.trim().split('\n')
  for (let i = 0; i < lines[0].split(' ').filter(item => item !== '').length; i++) {
    parsed.push([])
  }

  for (const line of lines) {
    for (const [i, value] of line.split(' ').filter(item => item !== '').entries()) {
      parsed[i].push(value)
    }
  }

  return parsed
}

export const parseInputB = (input: string): number => {
  const lines = input.split('\n').map(arr => Array.from(arr).reverse())
  // console.log(lines)

  let numbersSoFar = []
  let total = 0
  let shouldCalculate = false
  for (let i = 0; i < lines[0].length; i++) {
    let stringer = ''
    let operator = ''
    for (let j = 0; j < lines.length; j++) {
      const thing = lines[j][i]
      if (thing === '+' || thing === '*') {
        shouldCalculate = true
        operator = thing
      } else {
        stringer += thing
      }
    }

    let parsedNum = parseInt(stringer)
    if (parsedNum) {
      numbersSoFar.push(parseInt(stringer))
    }

    if (shouldCalculate) {
      total += calculateResult(numbersSoFar, operator)
      // console.log(numbersSoFar, operator, total)
      numbersSoFar = []
      shouldCalculate = false
    }
  }

  return total
}

export const calculateResult = (numbers: number[], operation: string): number => {
  return numbers.reduce((prev, cur) => {
    return operation === '*' ? prev * cur : prev + cur
  }, operation === '*' ? 1 : 0)
}

export const processInput = (input: string[]): number => {
  let result = 0

  // const operator = input.at(-1) === '*'
  const operator = input.pop()
  const sum = input.reduce((prev, current) => {
    return prev + parseInt(current)
  }, 0)

  const product = input.reduce((prev, current) => {
    return prev * parseInt(current)
  }, 1)

  return operator === '*' ? product : sum
}