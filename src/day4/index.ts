import { Cell, Grid, Point } from "../helpers/Grid";

export function partA(input: string): string[] {
  // Implement Part A logic for Day 4 here
  const lines = input.trim().split('\n')

  const grid = PaperGrid.fromStringArray(lines)
  const accessibleRolls = grid.findAccessiblePaperRolls()

  return [`${accessibleRolls.length}`];
}

export function partB(input: string): string[] {
  // Implement Part B logic for Day 4 here
  const lines = input.trim().split('\n')

  const grid = PaperGrid.fromStringArray(lines)
  const accessibleRolls = grid.findAndRemove()

  return [`${accessibleRolls.length}`];
}

export class PaperGrid extends Grid {
  findAccessiblePaperRolls(): Cell[] {
    const accessibleRolls: Cell[] = []
    // for each node, see if number of neighbor rolls is < 4
    for (const [point, cell] of this.cells.entries()) {
      if (cell !== '@') continue

      const [x, y] = point.split(',').map(coord => parseInt(coord))
      const neighborRolls = this.getAdjacentValues(new Point(x, y)).filter(cell => cell === '@')
      if (neighborRolls.length < 4) {
        accessibleRolls.push(cell)
      }
    }

    return accessibleRolls
  }

  findAndRemove(): Cell[] {
    // const newCells = [...this.cells]

    const accessibleRolls: Cell[] = []
    // for each node, see if number of neighbor rolls is < 4
    let rollsStillAccessible = true
    let totalIterations = 0;
    while (rollsStillAccessible) {
      totalIterations++
      let didRemoveRoll = false
      for (let [point, cell] of this.cells.entries()) {
        const [x, y] = point.split(',').map(coord => parseInt(coord))
        const pointObj = new Point(x, y)

        if (cell === 'x') this.set(pointObj, '.')
        if (cell !== '@') continue

        const neighborRolls = this.getAdjacentValues(pointObj).filter(cell => cell === '@' || cell === 'x')
        if (neighborRolls.length < 4) {
          accessibleRolls.push(cell)
          this.set(pointObj, 'x')
          didRemoveRoll = true
        }
      }

      if (didRemoveRoll === false) rollsStillAccessible = false
      // console.log(this.toString())
      this.clearRemoved()
    }

    // console.log(totalIterations)

    return accessibleRolls
  }

  clearRemoved() {
    for (let [point, cell] of this.cells.entries()) {
      const [x, y] = point.split(',').map(coord => parseInt(coord))
      const pointObj = new Point(x, y)

      if (cell === 'x') this.set(pointObj, '.')
    }
  }
}
