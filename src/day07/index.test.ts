import { LabGrid, partA, partB } from './index';
import { readInput } from '../index';
import { Point } from '../helpers/Grid';

describe('Day 07', () => {

  describe('LabGrid', () => {
    const labGrid = LabGrid.fromStringArray(readInput('src/day07/partialInput.txt').trim().split('\n'))
    it('should construct the grid', () => {
      expect(labGrid.toString()).toEqual(
        `. . . . . . . S . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . ^ . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . ^ . ^ . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . ^ . ^ . ^ . . . . . 
. . . . . . . . . . . . . . . 
. . . . ^ . ^ . . . ^ . . . . 
. . . . . . . . . . . . . . . 
. . . ^ . ^ . . . ^ . ^ . . . 
. . . . . . . . . . . . . . . 
. . ^ . . . ^ . . . . . ^ . . 
. . . . . . . . . . . . . . . 
. ^ . ^ . ^ . ^ . ^ . . . ^ . 
. . . . . . . . . . . . . . . `
      )
    })

    it('should detect the S and start a line', () => {
      labGrid.processLines()

      expect(labGrid.get(new Point(1, 7))).toEqual('|')
    })
  })

  it('should solve Part A with partial input', () => {
    const input = readInput('src/day07/partialInput.txt');
    const result = partA(input);
    expect(result).toEqual(21);
  });

  // it('should solve Part A with full input', () => {
  //   const input = readInput('src/day07/completeInput.txt');
  //   const result = partA(input);
  //   expect(result).toEqual(1594);
  // });

  it('should solve Part B with partial input', () => {
    const input = readInput('src/day07/partialInput.txt');
    const result = partB(input);
    expect(result).toEqual(40);
  });

  it('should solve Part B with partial input custom', () => {
    const input = `.......S.......
...............
.......^.......
...............`;
    const result = partB(input);
    expect(result).toEqual(2);
  });

  it('should solve Part B with partial input custom2', () => {
    const input = `.......S.......
...............
.......^.......
...............
......^.^......`;
    const result = partB(input);
    expect(result).toEqual(4);
  });

  it('should solve Part B with partial input custom2', () => {
    const input = `......................................................................S......................................................................
.............................................................................................................................................
......................................................................^......................................................................
.............................................................................................................................................
.....................................................................^.^.....................................................................
.............................................................................................................................................
....................................................................^.^.^....................................................................`;
    const result = partB(input);
    expect(result).toEqual(4);
  });

  // it('should solve Part B with complete input', () => {
  //   const input = readInput('src/day07/completeInput.txt');
  //   const result = partB(input);
  //   expect(result).toEqual(2);
  // });
});