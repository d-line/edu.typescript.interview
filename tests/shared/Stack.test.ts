import { describe, it, expect, beforeEach } from 'vitest';
import Stack from '../../src/shared/Stack';

describe('Stack', () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  describe('push', () => {
    it('should add items to the stack', () => {
      stack.push(1);
      expect(stack.size()).toBe(1);
    });

    it('should maintain LIFO order', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
    });

    it('should support multiple pushes', () => {
      stack.push(10);
      stack.push(20);
      stack.push(30);
      expect(stack.size()).toBe(3);
    });
  });

  describe('pop', () => {
    it('should return undefined when popping from empty stack', () => {
      expect(stack.pop()).toBeUndefined();
    });

    it('should remove and return the top item', () => {
      stack.push(42);
      expect(stack.pop()).toBe(42);
      expect(stack.size()).toBe(0);
    });

    it('should return items in LIFO order', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
    });

    it('should decrease size after each pop', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.size()).toBe(3);
      stack.pop();
      expect(stack.size()).toBe(2);
      stack.pop();
      expect(stack.size()).toBe(1);
      stack.pop();
      expect(stack.size()).toBe(0);
    });
  });

  describe('peek', () => {
    it('should return undefined when stack is empty', () => {
      expect(stack.peek()).toBeUndefined();
    });

    it('should return top item without removing it', () => {
      stack.push(99);
      expect(stack.peek()).toBe(99);
      expect(stack.size()).toBe(1);
    });

    it('should always return the top item', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.peek()).toBe(3);
      expect(stack.peek()).toBe(3);
      expect(stack.peek()).toBe(3);
    });

    it('should return the new top item after pop', () => {
      stack.push(10);
      stack.push(20);
      stack.pop();
      expect(stack.peek()).toBe(10);
    });
  });

  describe('isEmpty', () => {
    it('should return true for new stack', () => {
      expect(stack.isEmpty()).toBe(true);
    });

    it('should return false after push', () => {
      stack.push(1);
      expect(stack.isEmpty()).toBe(false);
    });

    it('should return true after popping all items', () => {
      stack.push(1);
      stack.push(2);
      stack.pop();
      stack.pop();
      expect(stack.isEmpty()).toBe(true);
    });

    it('should return false with multiple items', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.isEmpty()).toBe(false);
    });
  });

  describe('size', () => {
    it('should return 0 for new stack', () => {
      expect(stack.size()).toBe(0);
    });

    it('should increase with each push', () => {
      expect(stack.size()).toBe(0);
      stack.push(1);
      expect(stack.size()).toBe(1);
      stack.push(2);
      expect(stack.size()).toBe(2);
      stack.push(3);
      expect(stack.size()).toBe(3);
    });

    it('should decrease with each pop', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.size()).toBe(3);
      stack.pop();
      expect(stack.size()).toBe(2);
      stack.pop();
      expect(stack.size()).toBe(1);
    });

    it('should return 0 after popping all items', () => {
      stack.push(1);
      stack.pop();
      expect(stack.size()).toBe(0);
    });
  });

  describe('generic types', () => {
    it('should work with strings', () => {
      const stringStack = new Stack<string>();
      stringStack.push('hello');
      stringStack.push('world');
      expect(stringStack.pop()).toBe('world');
      expect(stringStack.pop()).toBe('hello');
    });

    it('should work with objects', () => {
      const objStack = new Stack<{ id: number; name: string }>();
      const obj1 = { id: 1, name: 'Alice' };
      const obj2 = { id: 2, name: 'Bob' };
      objStack.push(obj1);
      objStack.push(obj2);
      expect(objStack.pop()).toBe(obj2);
      expect(objStack.pop()).toBe(obj1);
    });

    it('should work with mixed types using any', () => {
      const anyStack = new Stack<any>();
      anyStack.push(1);
      anyStack.push('hello');
      anyStack.push({ key: 'value' });
      expect(anyStack.pop()).toEqual({ key: 'value' });
      expect(anyStack.pop()).toBe('hello');
      expect(anyStack.pop()).toBe(1);
    });
  });

  describe('edge cases', () => {
    it('should handle single item', () => {
      stack.push(42);
      expect(stack.size()).toBe(1);
      expect(stack.peek()).toBe(42);
      expect(stack.isEmpty()).toBe(false);
      expect(stack.pop()).toBe(42);
      expect(stack.isEmpty()).toBe(true);
    });

    it('should handle large number of items', () => {
      const count = 1000;
      for (let i = 0; i < count; i++) {
        stack.push(i);
      }
      expect(stack.size()).toBe(count);
      for (let i = count - 1; i >= 0; i--) {
        expect(stack.pop()).toBe(i);
      }
      expect(stack.isEmpty()).toBe(true);
    });

    it('should handle repeated push and pop', () => {
      stack.push(1);
      stack.pop();
      stack.push(2);
      stack.pop();
      stack.push(3);
      expect(stack.pop()).toBe(3);
      expect(stack.isEmpty()).toBe(true);
    });

    it('should handle zero values', () => {
      stack.push(0);
      expect(stack.peek()).toBe(0);
      expect(stack.pop()).toBe(0);
      expect(stack.isEmpty()).toBe(true);
    });

    it('should handle negative numbers', () => {
      stack.push(-1);
      stack.push(-100);
      expect(stack.pop()).toBe(-100);
      expect(stack.pop()).toBe(-1);
    });
  });
});
