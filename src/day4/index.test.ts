import { partA, partB } from './index';
import { readInput } from '../index';

describe('Day 4', () => {

  it('should solve Part A with partial input', () => {
    const input = readInput('src/day4/partialInput.txt');
    const result = partA(input);
    expect(result).toEqual(['13']);
  });

  // it('should solve Part A with full input', () => {
  //   const input = readInput('src/day4/completeInput.txt');
  //   const result = partA(input);
  //   expect(result).toEqual(['1349']);
  // });

  it('should solve Part B with partial input', () => {
    const input = readInput('src/day4/partialInput.txt');
    const result = partB(input);
    expect(result).toEqual(['43']);
  });

  it('should solve Part B with complete input', () => {
    const input = readInput('src/day4/completeInput.txt');
    const result = partB(input);
    // expect(result).toEqual(['8277']);
  });
});
