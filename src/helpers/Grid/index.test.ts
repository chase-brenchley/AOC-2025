import { Grid, Point } from "."


describe('Grid', () => {
    //   0 1 2
    // 0 A B C
    // 1 D E F
    // 2 G H I
    const input = [
        'ABC',
        'DEF',
        'GHI'
    ]

    it('should construct a grid from a string array', () => {
        const grid = Grid.fromStringArray(input)
        const point = new Point(0, 0)
        expect(grid.get(point)).toEqual('A')

        expect(grid.get(new Point(1,2))).toEqual('F')
    })

    it('should get N, S, E, W neighbors of a cell', () => {
        const grid = Grid.fromStringArray(input)
        const result = grid.getNeighborsValues(new Point(1, 1))

        expect(result.length).toEqual(4)

        // North
        expect(result[0]).toEqual('B')
        // East
        expect(result[1]).toEqual('F')
        // South
        expect(result[0]).toEqual('B')
        // West
        expect(result[0]).toEqual('B')
    })

    it('should get N, S, E, W and diagonal neighbors of a cell', () => {
        const grid = Grid.fromStringArray(input)
        const result = grid.getAdjacentValues(new Point(1, 1))

        expect(result.length).toEqual(8)

        expect(result[1]).toEqual('C')
        expect(result[3]).toEqual('I')
        expect(result[5]).toEqual('G')
        expect(result[7]).toEqual('A')
    })
})
