import { isValidId, isValidIdPart2, partA, partB, processLine } from './index';
import { readInput } from '../index';

describe('Day 2', () => {

  describe('isValidId', () => {
    it('should determine that the same number repeated is invalid', () => {
      const result = isValidId('11')
      expect(result).toBeFalsy()
    })

    it('should determine that 1010 is invalid', () => {
      const result = isValidId('1010')
      expect(result).toBeFalsy()
    })

    it('should determine that 69 is a valid id', () => {
      const result = isValidId('69')
      expect(result).toBeTruthy()
    })
  })

  describe('processLine', () => {
    it('should find 11 and 22 for range 11-22', () => {
      const result = processLine('11-22')
      expect(result).toEqual(11 + 22)
    })
  })

  it('should solve Part A with partial input', () => {
    const input = readInput('src/day2/partialInput.txt');
    const result = partA(input);
    expect(result).toEqual(1227775554);
  });

  it('should solve Part A with full input', () => {
    // const input = readInput('src/day2/completeInput.txt');
    // const result = partA(input);
    // expect(result).toEqual(12586854255);
  });

  describe('isValidIdPart2', () => {
    it('should only be invalid if the sequence is repeated at least twice', () => {
      let result = isValidIdPart2('11')
      expect(result).toBeFalsy()

      result = isValidIdPart2('22')
      expect(result).toBeFalsy()

      result = isValidIdPart2('1188511885')
      expect(result).toBeFalsy()

      result = isValidIdPart2('12151215')
      expect(result).toBeFalsy()
    })

    it('should detect a valid id', () => {
      let result = isValidIdPart2('1234234')
      expect(result).toBeTruthy()

      result = isValidIdPart2('565655')
      expect(result).toBeTruthy()
    })
  })

  describe('processLine with isValidIdPart2', () => {
    it('should correctly do these ranges', () => {
      const testRange = (range: string, sum: number): void => {
        let result = processLine(range, isValidIdPart2)
        expect(result).toEqual(sum)
      }

      let result = processLine('11-22', isValidIdPart2)
      expect(result).toEqual(11 + 22)

      result = processLine('95-115', isValidIdPart2)
      expect(result).toEqual(99 + 111)

      testRange('998-1012', 999+1010)
      testRange('1188511880-1188511890', 1188511885)
      testRange('222220-222224', 222222)
      testRange('1698522-1698528', 0)
      testRange('446443-446449', 446446)
      testRange('38593856-38593862', 38593859)
      testRange('565653-565659', 565656)
      testRange('824824821-824824827', 824824824)
    })
  })

  it('should solve Part B with partial input', () => {
    const input = readInput('src/day2/partialInput.txt');
    const result = partB(input);
    expect(result).toEqual(['4174379265']);
  });

  // it('should solve Part B with complete input', () => {
  //   const input = readInput('src/day2/completeInput.txt');
  //   const result = partB(input);
  //   expect(result).toEqual(['17298174201']);
  // });
});
