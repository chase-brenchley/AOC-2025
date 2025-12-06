type ValidatorFn = (input: string) => boolean;

export const isValidId: ValidatorFn = (input) => {
  let result = true

  const halfLength = Math.ceil(input.length / 2)

  const firstHalf = input.substring(0, halfLength)
  const secondHalf = input.substring(halfLength)

  if (firstHalf === secondHalf) {
    result = false
  }

  return result
}

export function processLine(line: string, validationFunc: ValidatorFn = isValidId): number {
  let sum = 0

  const [lower, upper] = line.split('-').map(f => parseInt(f))
  for (let i = lower; i <= upper; i++) {
    // console.log(`testing ${i}`)
    if (!validationFunc(`${i}`)) {
      // console.log(`${i} was invalid`)
      sum += i
    }
  }

  return sum
}

export function partA(input: string): number {
  // Implement Part A logic for Day 2 here
  const lines = input.trim().split(',')
  let sum = 0
  for (const line of lines) {
    sum += processLine(line)
  }
  return sum;
}

export const isValidIdPart2: ValidatorFn = (input) => {
  let result = true

  // find a repeat in the number, 12151215 the pattern is 1215
  const firstDigit = input[0]

  for (let i = 0; i < input.length; i++) {
    let subString = input.substring(0, i)
    let foo = input.split(subString)

    if (foo.every(val => val === '')) return false
  }
  // let arr = input.split(firstDigit).filter(a => a)
  // if (arr.length === 0) return false
  // while (arr.length > 1) {
  //   if (arr.every(val => val === arr[0])) {
  //     result = false
  //     break
  //   } else {
  //     arr = arr.join('').split(arr[0]).filter(a => a)
  //   }
  // }

  return result
}

export function partB(input: string): string[] {
  // Implement Part B logic for Day 2 here
  const lines = input.trim().split(',')
  let sum = 0
  for (const line of lines) {
    sum += processLine(line, isValidIdPart2)
  }
  return [`${sum}`];
}
