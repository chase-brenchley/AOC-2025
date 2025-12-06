export type Cell = string;

export class Grid {
  cells: Map<string, Cell> = new Map<string, Cell>();

  static fromStringArray<T extends typeof Grid>(this: T, input: string[]): InstanceType<T> {
    const grid = new this() as InstanceType<T>;

    let i = 0;
    for (const line of input) {
      let j = 0;
      for (const char of line.split("")) {
        const point = new Point(i, j);

        grid.set(point, char);
        j++;
      }
      i++;
    }

    return grid;
  }

  get(point: Point): Cell {
    return this.cells.get(point.toString());
  }

  set(point: Point, value: Cell) {
    this.cells.set(point.toString(), value);
  }

  getNeighbors(point: Point): Point[] {
    const north = this.traverseFrom(point).north(1)
    const south = this.traverseFrom(point).south(1)
    const east = this.traverseFrom(point).east(1)
    const west = this.traverseFrom(point).west(1)

    return [north, east, south, west];
  }

  getNeighborsValues(point: Point): Cell[] {
    return this.getNeighbors(point).map(neighbor => this.get(neighbor))
  }

  traverseFrom(point: Point) {
    return {
      west: (distance = 1) => {
        return new Point(point.x, point.y - distance);
      },
      south: (distance = 1) => {
        return new Point(point.x + distance, point.y);
      },
      east: (distance = 1) => {
        return new Point(point.x, point.y + distance);
      },
      north: (distance = 1) => {
        return new Point(point.x - distance, point.y);
      },
    };
  }

  getAdjacent(point: Point): Point[] {
    const [north, east, south, west] = this.getNeighbors(point)

    const northEast = this.traverseFrom(north).east(1)
    const southEast = this.traverseFrom(south).east(1)
    const southWest = this.traverseFrom(south).west(1)
    const northWest = this.traverseFrom(north).west(1)

    return [north, northEast, east, southEast, south, southWest, west, northWest]
  }

  getAdjacentValues(point: Point): Cell[] {
    return this.getAdjacent(point).map(neighbor => this.get(neighbor))
  }

  toString(): string {
    let result = ''
    let lastX = 0
    let lastY = 0

    for (let [point, cell] of this.cells.entries()) {
      const [x, y] = point.split(',').map(coord => parseInt(coord))

      if (x !== lastX) {
        result += '\n'
      }
      result += `${cell} `

      lastX = x
    }

    return result
  }
}

export class Point {
  constructor(public x: number, public y: number) {}

  toString(): string {
    return `${this.x},${this.y}`;
  }
}
