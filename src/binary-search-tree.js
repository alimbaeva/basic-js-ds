const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * https://www.youtube.com/watch?v=T0M96MneWXA
 * https://yandex.ru/video/preview/?filmId=16337968570306296085&text=как+писать+на+классах+узлы+ссылок+List+js
 * https://www.youtube.com/watch?v=fnqUD4FTE5Q
 * 
 * 
 * 
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.head = null;

  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = this._addNode(this.head, data);
  }

  _addNode(node, data) {
    if (node === null) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this._addNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._addNode(node.right, data);
    }

    return node;
  }

  has(data) {
    return this._hasNode(this.head, data);
  }
  
  _hasNode(node, data) {
    if (node === null) {
      return false;
    }

    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this._hasNode(node.left, data);
    } else {
      return this._hasNode(node.right, data);
    }
  }

  find(data) {
    return this._findNode(this.head, data);
  }

  _findNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._findNode(node.left, data);
    } else {
      return this._findNode(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this._removeNode(this.head, data);
  }

  _removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      const minRightNode = this._findMinNode(node.right);
      node.data = minRightNode.data;
      node.right = this._removeNode(node.right, minRightNode.data);
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);
    } else {
      node.right = this._removeNode(node.right, data);
    }

    return node;
  }
 
  min() {
    const minNode = this._findMinNode(this.head);
    return minNode ? minNode.data : null;
  }

  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }


  max() {
    const maxNode = this._findMaxNode(this.head);
    return maxNode ? maxNode.data : null;
  }

  _findMaxNode(node) {
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }

}


module.exports = {
  BinarySearchTree
};