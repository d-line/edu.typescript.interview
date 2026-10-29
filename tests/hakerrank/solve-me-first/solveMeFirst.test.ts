import { describe, expect, it } from 'vitest';
import { main } from '../../../src/hakerrank/solve-me-first/solveMeFirst';

describe('solveMeFirst main', () => {
  it.each([
    { a: 2, b: 3, expected: 5 },
    { a: 7, b: 3, expected: 10 },
    { a: 1, b: 1, expected: 2 },
    { a: 1000, b: 1000, expected: 2000 },
    { a: 1, b: 1000, expected: 1001 },
    { a: 1000, b: 1, expected: 1001 },
  ])('returns $expected for ($a, $b)', ({ a, b, expected }) => {
    expect(main(a, b)).toBe(expected);
  });
});
