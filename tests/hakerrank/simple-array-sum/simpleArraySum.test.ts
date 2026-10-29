import { describe, expect, it } from 'vitest';
import { simpleArraySum } from '../../../src/hakerrank/simple-array-sum/simpleArraySum';

describe('simpleArraySum', () => {
  it.each([
    { name: 'sample input', values: [1, 2, 3, 4, 10, 11], expected: 31 },
    { name: 'statement example', values: [1, 2, 3], expected: 6 },
    { name: 'minimum element', values: [1], expected: 1 },
    { name: 'maximum element', values: [1000], expected: 1000 },
    { name: 'repeated values', values: [5, 5, 5, 5], expected: 20 },
    { name: 'unsorted values', values: [1000, 1, 500, 2], expected: 1503 },
    { name: 'maximum length with minimum values', values: Array(1000).fill(1), expected: 1000 },
    { name: 'maximum length with maximum values', values: Array(1000).fill(1000), expected: 1000000 },
  ])('sums $name', ({ values, expected }) => {
    expect(simpleArraySum(values)).toBe(expected);
  });
});
