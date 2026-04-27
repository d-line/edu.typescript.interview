import { describe, it, expect, beforeEach } from 'vitest';
import Queue from '../../../src/interview-cake/queue-with-two-stacks/queue';

describe('Queue (Two Stacks Implementation)', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  describe('enqueue', () => {
    it('should add items to the queue', () => {
      queue.enqueue(1);
      expect(queue.peek()).toBe(1);
    });

    it('should support multiple enqueues', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.peek()).toBe(1);
    });

    it('should work with different data types', () => {
      const stringQueue = new Queue<string>();
      stringQueue.enqueue('hello');
      expect(stringQueue.peek()).toBe('hello');
    });

    it('should work with objects', () => {
      const objQueue = new Queue<{ id: number; name: string }>();
      objQueue.enqueue({ id: 1, name: 'test' });
      expect(objQueue.peek()).toEqual({ id: 1, name: 'test' });
    });
  });

  describe('dequeue', () => {
    it('should return undefined when dequeuing from empty queue', () => {
      expect(queue.dequeue()).toBeUndefined();
    });

    it('should remove and return items in FIFO order', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
      expect(queue.dequeue()).toBe(3);
    });

    it('should return undefined after dequeueing all items', () => {
      queue.enqueue(42);
      queue.dequeue();
      expect(queue.dequeue()).toBeUndefined();
    });

    it('should maintain FIFO order with mixed operations', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.dequeue()).toBe(1);
      queue.enqueue(3);
      expect(queue.dequeue()).toBe(2);
      expect(queue.dequeue()).toBe(3);
    });

    it('should handle large number of items', () => {
      const itemCount = 1000;
      for (let i = 0; i < itemCount; i++) {
        queue.enqueue(i);
      }
      for (let i = 0; i < itemCount; i++) {
        expect(queue.dequeue()).toBe(i);
      }
    });
  });

  describe('peek', () => {
    it('should return undefined on empty queue', () => {
      expect(queue.peek()).toBeUndefined();
    });

    it('should return the front item without removing it', () => {
      queue.enqueue(42);
      expect(queue.peek()).toBe(42);
      expect(queue.peek()).toBe(42);
    });

    it('should return correct item after multiple enqueues', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.peek()).toBe(1);
    });

    it('should return updated front after dequeue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      expect(queue.peek()).toBe(2);
    });

    it('should not affect queue state', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.peek();
      queue.peek();
      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
    });
  });

  describe('complex scenarios', () => {
    it('should handle alternating enqueue and dequeue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.dequeue()).toBe(1);
      queue.enqueue(3);
      queue.enqueue(4);
      expect(queue.dequeue()).toBe(2);
      expect(queue.dequeue()).toBe(3);
      expect(queue.dequeue()).toBe(4);
    });

    it('should empty and refill the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.dequeue();
      queue.dequeue();
      expect(queue.peek()).toBeUndefined();
      
      queue.enqueue(5);
      queue.enqueue(6);
      expect(queue.peek()).toBe(5);
      expect(queue.dequeue()).toBe(5);
      expect(queue.dequeue()).toBe(6);
    });

    it('should properly transfer between stacks', () => {
      // This tests the internal transfer mechanism
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      // peek triggers the transfer from inStack to outStack
      expect(queue.peek()).toBe(1);
      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
      expect(queue.dequeue()).toBe(3);
    });

    it('should maintain FIFO order through multiple cycles', () => {
      for (let cycle = 0; cycle < 3; cycle++) {
        for (let i = 1; i <= 5; i++) {
          queue.enqueue(i);
        }
        for (let i = 1; i <= 5; i++) {
          expect(queue.dequeue()).toBe(i);
        }
      }
    });
  });

  describe('edge cases', () => {
    it('should handle single item', () => {
      queue.enqueue(99);
      expect(queue.peek()).toBe(99);
      expect(queue.dequeue()).toBe(99);
      expect(queue.dequeue()).toBeUndefined();
    });

    it('should handle repeated dequeues on empty queue', () => {
      expect(queue.dequeue()).toBeUndefined();
      expect(queue.dequeue()).toBeUndefined();
      expect(queue.dequeue()).toBeUndefined();
    });

    it('should handle repeated peeks on empty queue', () => {
      expect(queue.peek()).toBeUndefined();
      expect(queue.peek()).toBeUndefined();
    });

    it('should work with falsy values', () => {
      const falsynQueue = new Queue<number | null>();
      falsynQueue.enqueue(0);
      falsynQueue.enqueue(null as any);
      expect(falsynQueue.dequeue()).toBe(0);
      expect(falsynQueue.dequeue()).toBe(null);
    });
  });
});
