import { findBiggest, findBiggestPart2, foo, getMaxFromEligible, partA, partB } from './index';
import { readInput } from '../index';

describe('Day 3', () => {

  describe('findBiggest()', () => {
    it('should find the biggest number', () => {
      const result = findBiggest('987654321111111')
      expect(result).toEqual(98)
    })

    it('should handle when 9 is the last number', () => {
      const result = findBiggest('17654321111119')
      expect(result).toEqual(79)
    })
  })

  it('should solve Part A with partial input', () => {
    const input = readInput('src/day3/partialInput.txt');
    const result = partA(input);
    expect(result).toEqual(['357']);
  });

  // it('should solve Part A with full input', () => {
  //   const input = readInput('src/day3/completeInput.txt');
  //   const result = partA(input);
  //   expect(result).toEqual(['17074']);
  // });

  describe('findBiggestPart2()', () => {
    it('should work with the test input', () => {
      let result = findBiggestPart2('987654321111111')
      expect(result).toEqual(987654321111)

      result = findBiggestPart2('811111111111119')
      expect(result).toEqual(811111111119)

      result = findBiggestPart2('234234234234278')
      expect(result).toEqual(434234234278)

      result = findBiggestPart2('818181911112111')
      expect(result).toEqual(888911112111)
    })

    it('should work if there are 11 numbers after 9', () => {
      let result = findBiggestPart2('1111911111111112')
      expect(result).toEqual(911111111112)
    })

    it('should not work if there are not 11 numbers after 9', () => {
      let result = findBiggestPart2('111191111111112')
      expect(result).toEqual(191111111112)
    })

    it('should only consider numbers that result in 12 digits', () => {
      let result = getMaxFromEligible('123454321111111')
      expect(result).toEqual(4)

      result = getMaxFromEligible('1234543211111119999999')
      expect(result).toEqual(5)
    })

    // it('should work with real input', () => {
    //   let result = getMaxFromEligible('2233643232222242333443433223122333324326451323323334325223136631334332233233323164354342233332238233')
    //   expect(result).toEqual(6)

    //   result = findBiggestPart2('2233643232222242333443433223122333324326451323323334325223136631334332233233323164354342233332238233')
    //   expect(result).toEqual(666665448233)
    // })

    it('should get the max from foo', () => {
      let result = foo('91111111811111111111')
      expect(result).toEqual('981111111111')

      result = foo('987654321111111')
      expect(result).toEqual('987654321111')

      result = foo('811111111111119')
      expect(result).toEqual('811111111119')

      result = foo('234234234234278')
      expect(result).toEqual('434234234278')

      result = foo('818181911112111')
      expect(result).toEqual('888911112111')
    })

    // it('foo should match findBiggestPart2', () => {
    //   const input = '2233643232222242333443433223122333324326451323323334325223136631334332233233323164354342233332238233'
    //   const resA = findBiggestPart2(input)
    //   const resB = parseInt(foo(input))

    //   expect(resA).toEqual(resB)
    // })
  })

  it('should solve Part B with partial input', () => {
    const input = readInput('src/day3/partialInput.txt');
    const result = partB(input);
    expect(result).toEqual(['3121910778619']);
  });

  // it('should solve Part B with complete input', () => {
  //   const input = readInput('src/day3/completeInput.txt');
  //   const result = partB(input);
  //   expect(result).toEqual(['169512729575727']);
  // });
});
