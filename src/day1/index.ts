export const processInstruction = (instruction: string, dialPos: number): [number, number] => {
  let clicks = 1

  const direction = instruction.substring(0,1)
  let amount = parseInt(instruction.substring(1))
  amount = direction === 'L' ? amount * -1 : amount

  const result = moveDial(dialPos, amount)

  return result
}

export const moveDial = (startPos: number, amount: number): [number, number] => {
  let newPos = startPos + amount

  const clicks = calculateClicks(startPos, newPos)

  if (newPos < 0) {
    newPos = 100 + (newPos % 100)
  }
  newPos %= 100

  return [newPos, clicks]
}

export const calculateClicks = (start: number, end: number): number => {
  let clicks = 0

  if (end === 0) clicks++

  // clicks += Math.floor((start + Math.abs(end)) / 100)
  if (start > 0 && end < 0) {
    clicks++
  }

  clicks += Math.floor(Math.abs(end / 100))

  return clicks
}

export function partA(input: string): string[] {
  // Implement Part A logic for Day 1 here
  const lines = input.trim().split('\n')
  let totalClicks = 0
  let pos = 50
  for (const line of lines) {
    const [endPos, clicks] = processInstruction(line, pos)
    totalClicks += clicks
    pos = endPos
  }
  return lines;
}

export function partB(input: string): string[] {
  // Implement Part B logic for Day 1 here
  const lines = input.trim().split('\n')

  let totalClicks = 0
  let pos = 50
  for (const line of lines) {
    const [endPos, clicks] = processInstruction(line, pos)
    totalClicks += clicks
    pos = endPos
  }

  return [`${totalClicks}`];
}
