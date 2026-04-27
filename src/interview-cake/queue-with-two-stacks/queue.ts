export default class Queue<T> {
    private inStack: T[] = [];
    private outStack: T[] = [];

    enqueue(item: T): void {
        this.inStack.push(item);
    }

    dequeue(): T | undefined {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                // Safe to use '!' because we just checked inStack is not empty
                this.outStack.push(this.inStack.pop()!);
            }
        }
        return this.outStack.pop();
    }
    
    peek(): T | undefined {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                // Safe to use '!' because we just checked inStack is not empty
                this.outStack.push(this.inStack.pop()!);
            }
        }
        return this.outStack[this.outStack.length - 1];
    }
}