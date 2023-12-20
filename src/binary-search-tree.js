const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(head = null) {
    this.head = head;
  }

  root() {
    return this.head;
  }

  add(data) {
    const searchNode = (node) => {

      if (data < node.data) {
        if (node.left === null) {
          node.left = new Node(data);
          return
        } else return searchNode(node.left);
      } else if (data > node.data) {
        if (node.right === null) {
          node.right = new Node(data);
          return
        } else return searchNode(node.right);
      } else {
        return null;
      }
    }

    if (this.head === null) {
      this.head = new Node(data);
      return
    }

    return searchNode(this.head)
  }

  has(data) {
    const searchNode = (node => {
      if (data === node.data) return true;

      if (data < node.data) {
        if (node.left === null) return false;
        return searchNode(node.left);
      }
      if (data > node.data) {
        if (node.right === null) return false;
        return searchNode(node.right);
      }
    })

    return searchNode(this.head);
  }

  find(data) {
    const searchNode = (node) => {
      if (data === node.data) return node;

      if (data < node.data) {
        if (node.left === null) return null;
        return searchNode(node.left);
      } else {
        if (node.right === null) return null;
        return searchNode(node.right);
      }
    }

    return searchNode(this.head)
  }

  remove(data) {

    const removeNode = (node, value) => {
      if (node === null) {
        return null
      }

      if (value === node.data) {
        if (node.left === null && node.right === null) return null;
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;

        let leastNode = node.right;
        while (leastNode.left !== null) {
          leastNode = leastNode.left;
        }
        node.data = leastNode.data;
        node.right = removeNode(node.right, leastNode.data);
        return node;
      };

      if (data < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      }
    }

    this.head = removeNode(this.head, data);
  }

  min() {
    const getMin = (node) => {
      if (node.left === null) return node;
      return getMin(node.left);
    }
    return getMin(this.head).data
  }

  max() {
    const getMax = (node) => {
      if (node.right === null) return node;
      return getMax(node.right);
    }
    return getMax(this.head).data
  }
}

module.exports = {
  BinarySearchTree
};