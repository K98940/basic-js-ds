const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
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
    this.root = null;
  }

  printQueue(msg = '') {
    const nodes = [];
    let node = this.root;
    while (node) {
      nodes.push(node.value);
      node = node.next;
    }
    console.debug(`${msg}root: `, this.root.value, nodes);
  }

  getUnderlyingList() {
    return this.root;
  }

  enqueue(value) {

    if (this.root === null) {
      const node = new ListNode(value);
      node.next = null;
      this.root = node;
      return;
    }

    let node = this.root;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = new ListNode(value);
    // this.printQueue(`enqueue(${value})`);
  }

  dequeue() {
    // this.printQueue(`DEqueue()`);
    const delNode = this.root.value;
    this.root = this.root.next;
    return delNode;
  }
}

module.exports = {
  Queue
};
