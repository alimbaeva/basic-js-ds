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

// class ListNode {
//   constructor(value, right = null, left = null) {
//     this.value = value;
//     this.right = right;
//     this.left = left;
//   }
//   toString() {
//     return `ListNode  ${this.value}`
//   }
// }


class BinarySearchTree {
  constructor() {
    this.head = null;

  }
  // element = null;

  root() {
    return this.head;
  }

  add(data) {
    let curListNode = new Node(data);
    if (!this.head) {
      this.head = curListNode;
    } else {

      this.addList(this.head, curListNode)
    }
  }

  addList(node, curListNode) {
    if (curListNode.data < node.data) {
      if (!node.left) {
        node.left = curListNode;
      } else {
        this.addList(node.left, curListNode)
      }
    } else {
      if (!node.right) {
        node.right = curListNode;
      } else {
        this.addList(node.right, curListNode)
      }
    }
    // if (!node) {
    //     return new ListNode(data);
    // }
    // if (node.value === data) {
    //     return node;
    // }

    // if (data < node.value) {
    //     node.left = this.addList(node.left, value);
    // } else {
    //     node.right = this.addList(node.right, data)
    // }
    // return node;
  }

  has(data) {
    if (!this.head) {
      return false
    } else {
      return this.searchHas(this.head, data);
    }
    // let result = this.searchHas(this.head, data);
    // return result;
  }

  searchHas(node, data) {
    if (node.data == data) return true;
    if (data < node.data) {
      if (!node.left) {
        return false
      } else {
        return this.searchHas(node.left, data)
      }
    } else {
      if (!node.right) {
        return false
      } else {

        return this.searchHas(node.right, data)
      }
    }
  }

  find(data) {
    if (!this.head) {
      return this.head
    } else {
      return this.searchFinde(this.head, data)
    }
  }

  searchFinde(node, data) {
    if (data === node.data) { return node }
    if (data < node.data) {
      if (!node.left) {
        return null
      } else {
        return this.searchFinde(node.left, data)
      }
    } else {
      if (!node.right) {
        return null;
      } else {
        return this.searchFinde(node.right, data)
      }
    }
  }
  remove(data) {
    this.head = this.removeNode(this.head, data);
    // return data
  }
  removeNode(node, data) {
    if (!node) { return null };
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null
      } else if (!node.left) {
        node - node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }

      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left
      }
      node.data = minRight.data;
      node.right = this.removeNode(node.right, minRight.data);
      console.log(node.data)
      return node
    }
  }

  min() {
    if (!this.head) {
      return
    }
    let node = this.head;
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.head) { return };
    let node = this.head;
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}


module.exports = {
  BinarySearchTree
};