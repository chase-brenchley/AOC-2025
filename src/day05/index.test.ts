import { partA, partB, RangeHelper } from './index';
import { readInput } from '../index';

describe('Day 05', () => {

  it('should solve Part A with partial input', () => {
    const input = readInput('src/day05/partialInput.txt');
    const result = partA(input);
    expect(result).toEqual(3);
  });

  // it('should solve Part A with full input', () => {
  //   const input = readInput('src/day05/completeInput.txt');
  //   const result = partA(input);
  //   expect(result).toEqual(674);
  // });

  it('should solve Part B with partial input', () => {
    const input = readInput('src/day05/partialInput.txt');
    const result = partB(input);
    expect(result).toEqual(14);
  });

  // it('should solve Part B and be lower than previous attempt', () => {
  //   const input = readInput('src/day05/completeInput.txt');
  //   const result = partB(input);
  //   expect(result).toBeLessThan(391380503733596);
  // });

  // it('should solve Part B with complete input', () => {
  //   const input = readInput('src/day05/completeInput.txt');
  //   const result = partB(input);
  //   // expect(result).toEqual(391380503733596); too high
  //   expect(result).toEqual(352509891817881);
  // });

  it('should determine a left overlap', () => {
    const rangeA = { lower: 1, upper: 69 }
    const rangeB = { lower: 4, upper: 79}

    const result = RangeHelper.rangesDoOverlapLeft(rangeA, rangeB)
    expect(result).toBeTruthy()

    // expect(
    //   RangeHelper.rangesDoOverlapLeft(
    //     { upper: 70, lower: 4},
    //     { lower: 5, upper: 10 }
    //   )
    // )
  })

  it('should determine a right overlap', () => {
    const rangeB = { lower: 1, upper: 69 }
    const rangeA = { lower: 4, upper: 79}

    const result = RangeHelper.rangesDoOverlapRight(rangeA, rangeB)
    expect(result).toBeTruthy()

    const resultB = RangeHelper.rangesDoOverlapRight({ lower: 70, upper: 100}, rangeB)
    expect(resultB).toBeFalsy()
  })

  it('should determine if ranges engulf', () => {
    expect(
      RangeHelper.rangesDoEngulf(
        { lower: 4, upper: 79},
        { lower: 1, upper: 89}
      )
    ).toBeTruthy

    expect(
      RangeHelper.rangesDoEngulf(
        { lower: 1, upper: 89},
        { lower: 4, upper: 79},
      )
    ).toBeTruthy
  })

  it('should merge a left overlap range', () => {
    const rangeHelper = new RangeHelper()
    const rangeA = { lower: 5, upper: 10}
    rangeHelper.addRange(rangeA)

    expect(rangeHelper.ranges[0]).toEqual(rangeA)

    rangeHelper.addRange({ lower: 4, upper: 7})
    expect(rangeHelper.ranges[0]).toEqual({ lower: 4, upper: 10 })

    rangeHelper.addRange({ lower: 10, upper: 15})
    expect(rangeHelper.ranges[0]).toEqual({ lower: 4, upper: 15 })

    rangeHelper.addRange({ lower: 1, upper: 4})
    expect(rangeHelper.ranges[0]).toEqual({ lower: 1, upper: 15 })
  })

  it('should calculate the length of all the ranges', () => {
    const rangeHelper = new RangeHelper()
    const rangeA = { lower: 5, upper: 10}
    rangeHelper.addRange(rangeA)
    rangeHelper.addRange({ lower: 4, upper: 7})

    expect(rangeHelper.length()).toEqual(7)

    rangeHelper.addRange({ lower: 69, upper: 70})
    expect(rangeHelper.length()).toEqual(9)
  })
});
