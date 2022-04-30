const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.element = null
    this.elLength = 0
  }

  getUnderlyingList() {
    return this.element
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    if (this.element === null) {
      this.element = new ListNode(value)
    } else {
      let currentEl = this.element

      while (currentEl.next) {
        currentEl = currentEl.next
      }

      currentEl.next = new ListNode(value)
    }
    this.elLength++;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    let currentEl = this.element
    this.element = currentEl.next
    this.elLength--
    return currentEl.value
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}


module.exports = {
  Queue
};
