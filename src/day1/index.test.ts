import { calculateClicks, partA, partB, processInstruction } from './index';
import { readInput } from '../index';

describe('Day 1', () => {

  // it('should solve Part A with partial input', () => {
  //   const input = readInput('src/day1/partialInput.txt');
  //   const result = partA(input);
  //   expect(result).toEqual(['hello world!']);
  // });

  // it('should solve Part A with full input', () => {
  //   const input = readInput('src/day1/completeInput.txt');
  //   const result = partA(input);
  //   expect(result).toEqual(['hello world!']);
  // });

  describe('processInstruction()', () => {
    it('the return value of clicks should be 1 when starting at 50 and going left 68', () => {
      const [,result] = processInstruction('L68', 50)
      expect(result).toEqual(1)
    })

    it('should not click when going L30 from 82', () => {
      const [,result] = processInstruction('L30', 82)
      expect(result).toEqual(0)
    })

    it('should click when landing on 0', () => {
      const [pos, clicks] = processInstruction('L55', 55)
      expect(clicks).toEqual(1)
      expect(pos).toEqual(0)
    })

    it('should properly determine the new position after L68 starting at 50', () => {
      const [result,] = processInstruction('L68', 50)
      expect(result).toEqual(82)
    })

    it('should determine new position when going over 100', () => {
      const [result,] = processInstruction('R68', 50)
      expect(result).toEqual(18)
    })
  })

  describe('calculateClicks()', () => {
    it ('should handle landing on 100', () => {
      let start = 52, end = 100
      let result = calculateClicks(start, end)
      expect(result).toEqual(1)
    })

    it ('should handle landing on 0', () => {
      let start = 52, end = 0
      let result = calculateClicks(start, end)
      expect(result).toEqual(1)
    })

    it('should handle going under 0', () => {
      let start = 50, end = 50 - 68
      let result = calculateClicks(start, end)
      expect(result).toEqual(1)
    })

    it('should handle going backwards multiple times', () => {
      let start = 50, end = -250
      let result = calculateClicks(start, end)
      expect(result).toEqual(3)
    })

    it('should handle going over 100', () => {
      let start = 50, end = 150
      let result = calculateClicks(start, end)
      expect(result).toEqual(1)
    })
  })

  it('should solve Part B with partial input', () => {
    const input = readInput('src/day1/partialInput.txt');
    const result = partB(input);
    expect(result).toEqual(['6']);
  });

  it('should solve Part B with complete input', () => {
    const input = readInput('src/day1/completeInput.txt');
    const result = partB(input);
    expect(result).toEqual(['6475']);
  });
});
