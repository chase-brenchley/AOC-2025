export function partA(input: string): any {
  // Implement Part A logic for Day 05 here
  // const lines = input.trim().split('\n')
  // return lines;
  const { ingredients, ranges } = parseInput(input)

  const result = getFreshIngredients({ ingredients, ranges })

  return result.length
}

export function partB(input: string): any {
  // Implement Part B logic for Day 05 here
  const { ingredients, ranges } = parseInput(input)

  const result = getFreshIds(ranges)

  return result
}

type input = { ranges: string[], ingredients: number[] }
export const parseInput = (input: string): input => {
  let [ranges, ingredients] = input.split('\n\n').map(part => part.trim().split('\n'))

  return {ranges, ingredients: ingredients.map(ingredient => parseInt(ingredient))}
}

export const getFreshIngredients = ({ ranges, ingredients }: input): number[] => {
  const freshIngredients: number[] = []

  for (const ingredient of ingredients) {
    for (const range of ranges) {
      const [lower, upper] = range.split('-').map(value => parseInt(value))

      if (ingredient >= lower && ingredient <= upper) {
        freshIngredients.push(ingredient)
        break
      }
    }
  }

  return freshIngredients
}

export const getFreshIds = (ranges: string[]): number => {
  const rangeHelper = new RangeHelper()

  for (const range of ranges) {
    const [lower, upper] = range.split('-').map(value => parseInt(value))
    const parsedRange: Range = { lower, upper }

    rangeHelper.addRange(parsedRange)
  }

  return rangeHelper.length()
}

type Range = { upper: number, lower: number }
export class RangeHelper {
  ranges: Range[] = []

  length(): number {
    let sum = 0

    for (const range of this.ranges) {
      const diff = range.upper - range.lower + 1
      sum += diff
    }

    return sum
  }

  addRange(newRange: Range): void {
    const toDelete = []
    let totalMergedRange: Range = newRange
    for (const [i, range] of this.ranges.entries()) {
      if (this.rangesDoOverlap(range, totalMergedRange)) {
        // mark range for deletion and calculate new range
        toDelete.push(i)

        totalMergedRange = this.mergeRanges(totalMergedRange, range, i)
      }
    }

    this.ranges = this.ranges.filter((_, i) => {
      if (toDelete.includes(i)) {
        return false
      }
      return true
    })

    this.ranges.push(totalMergedRange)
  }

  mergeRanges(range: Range, newRange: Range, i: number) {
    const min = range.lower < newRange.lower ? range.lower : newRange.lower
    const max = range.upper > newRange.upper ? range.upper : newRange.upper

    const mergedRange: Range = { lower: min, upper: max }
    return mergedRange
    // this.ranges[i] = mergedRange
  }

  rangesDoOverlap(a: Range, b: Range): boolean {
    const maxLower = Math.max(a.lower, b.lower);
    const minUpper = Math.min(a.upper, b.upper);

    // Use <= so that [1-5] and [5-9] intersect at 5
    return maxLower <= minUpper;
  }

  static rangesDoOverlapLeft(a: Range, b: Range): boolean {
    // if the upper of either ranges is greater than the lower of the other range, they overlap left
    // 1[---------]69
    //      4[---------]79
    // if a.upper > b.lower and b.lower > a.lower
    if (a.upper > b.lower && b.lower > a.lower) {
      return true
    }

    return false
  }

  static rangesDoOverlapRight(a: Range, b: Range): boolean {
    //      4[---------]79
    // 1[---------]69
    // if a.lower > b.lower && b.upper < a.upper
    if (a.lower > b.lower && a.lower < b.upper) {
      return true
    }

    return false
  }

  static rangesDoEngulf(a: Range, b: Range): boolean {
    //      4[---------]79
    // 1[-------------------]89
    if (a.lower > b.lower && a.upper < b.upper) {
      return true
    }

    // 1[-------------------]89
    //      4[---------]79
    if (a.lower < b.lower && a.upper > b.upper) {
      return true
    }

    return false
  }

}

