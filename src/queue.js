const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * 
 * =================================================================
 * 
 * 
 * https://www.youtube.com/watch?v=NpcHTBOAId0
 * 
 * 
 * 
 * 
 * =================================================================
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const removedValue = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null; // Если элемент был последним в очереди
    }

    return removedValue;
  }

  getUnderlyingList() {
    return this.head;
  }

  isEmpty() {
    return this.head === null;
  }
}

module.exports = {
  Queue
};
 