export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let index = 0; index < nums.length; index += 1) {
    const complement = target - nums[index];
    const matchIndex = seen.get(complement);

    if (matchIndex !== undefined) {
      return [matchIndex, index];
    }

    seen.set(nums[index], index);
  }

  return [];
}
