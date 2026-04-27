import { describe, expect, it } from "vitest";

import { twoSum } from "../../../src/leetcode/two-sum/two-sum";

describe("twoSum", () => {
  it("returns indices for the first pair that adds to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("supports duplicate values", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("returns an empty array when there is no solution", () => {
    expect(twoSum([1, 2, 3], 99)).toEqual([]);
  });
});
