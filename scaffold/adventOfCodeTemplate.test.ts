import { partA, partB } from './index';
import { readInput } from '../index';

describe('Day {{DAY_NUMBER}}', () => {

  it('should solve Part A with partial input', () => {
    const input = readInput('src/day{{DAY_NUMBER}}/partialInput.txt');
    const result = partA(input);
    expect(result).toEqual(['hello world!']);
  });

  it('should solve Part A with full input', () => {
    const input = readInput('src/day{{DAY_NUMBER}}/completeInput.txt');
    const result = partA(input);
    expect(result).toEqual(['hello world!']);
  });

  it('should solve Part B with partial input', () => {
    const input = readInput('src/day{{DAY_NUMBER}}/partialInput.txt');
    const result = partB(input);
    expect(result).toEqual(['hello world!']);
  });

  it('should solve Part B with complete input', () => {
    const input = readInput('src/day{{DAY_NUMBER}}/completeInput.txt');
    const result = partB(input);
    expect(result).toEqual(['hello world!']);
  });
});