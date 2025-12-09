import { Grid, Point } from "../helpers/Grid";

export function partA(input: string): number {
  // Implement Part A logic for Day 07 here
  const lines = input.trim().split('\n')
  const labGrid = LabGrid.fromStringArray(lines)
  labGrid.processLines()

  return labGrid.timesSplit;
}

export function partB(input: string): number {
  // Implement Part B logic for Day 07 here
  const lines = input.trim().split('\n')

  const labGrid = LabGrid.fromStringArray(lines)
  const sum = labGrid.processTimeLines()

  return sum;
}

export class LabGrid extends Grid {
  timesSplit = 0
  timelineSplits = 0
  timelines: Map<String, String>[] = []

  processLines() {
    for (const [point, cell] of this.cells.entries()) {
      const [x, y] = point.split(',').map(coord => parseInt(coord))

      if (cell === 'S' || cell === '|') {
        const [north, east, south, west] = this.getNeighbors(new Point(x, y))

        if (this.get(south) === '^') {
          // put lines on either side
          const [ , neighborEast, , neighborWest] = this.getNeighbors(south)

          this.set(neighborEast, '|')
          this.set(neighborWest, '|')
          this.timesSplit ++
        } else if (this.get(south) === '.') {
          this.setSouthNeighbor(new Point(x,y), '|')
        }
      }
    }
  }

  processTimeLines(startingPoint: Point = new Point(0,0), timeline: Map<String, String> = this.cells): number {
    let sum = 0
    let shouldSkip = true
    for (const [point, cell] of timeline.entries()) {
      const [x, y] = point.split(',').map(coord => parseInt(coord))
      if ((startingPoint.x !== x || startingPoint.y !== y) && shouldSkip) continue
      shouldSkip = false

      if (cell === 'S' || cell === '|') {
        const [north, east, south, west] = this.getNeighbors(new Point(x, y))

        if (this.get(south) === '^') {
          // put lines on either side
          const [ , neighborEast, , neighborWest] = this.getNeighbors(south)

          if (this.get(neighborEast) === '.') {
            let newGrid = new LabGrid()
            const newTimeline = new Map(this.cells)
            
            newGrid.cells = newTimeline
            newGrid.set(neighborEast, '|')
            // console.log('processing new timeline: \n', newGrid.toString())
            sum += newGrid.processTimeLines(neighborEast)
          }

          if (this.get(neighborWest) === '.') {
            let newGrid = new LabGrid()
            const newTimeline = new Map(this.cells)
            
            newGrid.cells = newTimeline
            newGrid.set(neighborWest, '|')
            // console.log('processing new timeline: \n', newGrid.toString())
            sum += newGrid.processTimeLines(neighborWest)
          }

          return sum
        } else if (this.get(south) === '.') {
          this.setSouthNeighbor(new Point(x,y), '|')
        }
      }
    }

    console.log('end of timeline: \n', this.toString())

    return sum += 1
  }
}