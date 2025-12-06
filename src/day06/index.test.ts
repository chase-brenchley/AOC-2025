import { parseInput, parseInputB, partA, partB, processInput } from './index';
import { readInput } from '../index';

describe('Day 06', () => {

  it('should solve Part A with partial input', () => {
    const input = readInput('src/day06/partialInput.txt');
    const result = partA(input);
    expect(result).toEqual(4277556);
  });

  it('should correctly parse the input', () => {
    const input = readInput('src/day06/partialInput.txt');
    const result = parseInput(input)

    expect(result[0]).toEqual([
      '123', '45', '6', '*'
    ])
  })

  it('should correctly process an input', () => {
    const input = ['123', '45', '6', '*']
    const result = processInput(input)

    expect(result).toEqual(33210)
  })

  it('should correctly process an input summing', () => {
    const input = ['328', '64', '98', '+']
    const result = processInput(input)

    expect(result).toEqual(490)
  })

  // it('should solve Part A with full input', () => {
  //   const input = readInput('src/day06/completeInput.txt');
  //   const result = partA(input);
  //   expect(result).toEqual(5782351442566);
  // });

  it('should solve Part B with partial input', () => {
    const input = readInput('src/day06/partialInput.txt');
    const result = partB(input);
    expect(result).toEqual(3263827);
  });

  // it('should correctly parse the input for B', () => {
  //   const input = readInput('src/day06/partialInput.txt');
  //   const result = parseInputB(input)

  //   expect(result[0]).toEqual([
  //     '4', '431', '623', '+'
  //   ])
  // })

  it('should solve Part B with complete input', () => {
    const input = readInput('src/day06/completeInput.txt');
    const result = partB(input);
    expect(result).toEqual(10194584711842);
  });
});