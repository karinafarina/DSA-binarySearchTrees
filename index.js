class BinarySearchTree {
  constructor(key = ull, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
    //if gtree is empty the this key is root node of BinarySearchTree
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }
    //if tree exists, start at root, compare it to key you wantt to insert. 
    //if new key is less thatn nodes key, new node needs to live in left hand branch
    else if (key < this.key) {
      //If the node does not have a left child, instantiate and insert the new node  as the left child of of that node passing 'this' as  the parent
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      //If the nod has an existing left chle, then we recursively call the 'insert' method so the node is added further down the tree
      else {
        this.left.insert(key, value);
      }
    }
    //Similarly, if the new key is reater tahn the node's key then you do the same thing, but on the right hand side
    else {
      if (this.right = null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    //if the itdem is found at the root then return that value
    if (this.key == key) {
      return this.value;
    }
    //If the item is less than the root follow left chile.
    //If there is an existing left chile,
    //recursively check its left and/ or right child undil you find the tiem
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    //If the item you are looking for is greater than the root then follow the right child. If therd is an existing right chil, then recursively check its left and/or right child until you find the item
    else if (key > this.key && this.right) {
      return this.right.find(key)
    }
    //item is not in the tree
    else {
      throw new Error('Key Error');
    }
  }


  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      //If the node only has a left child, replace the node with its left child
      else if (this.left) {
        this._replaceWith(this.left);
      }
      //if node only has right, replace with right child
      else if (this.right) {
        this._replaceWith(this.right);
      }
      //If the node has no children remove it 
      else {
        this._replaceWith(null)
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error')
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      }
      else if (this == this.parent.right) {
        this.parent.right = node
      }
      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }
  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

let tree = new BinarySearchTree();
tree.insert(3);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(9);
tree.insert(2);
tree.insert(5);
tree.insert(7);
//console.log('tree', tree)

let easy = new BinarySearchTree();
easy.insert('E');
easy.insert('A');
easy.insert('S');
easy.insert('Y');
easy.insert('Q');
easy.insert('U');
easy.insert('E');
easy.insert('S');
easy.insert('T');
easy.insert('I');
easy.insert('O');
easy.insert('N');


console.log('easy', easy)

function tree(t) {
  if(!t){//if nothing is passed
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right)
}
//Adds up all of the node values of a given tree recursively

function heightOfBST(bst) {
  let leftHeight = 0;
  let rightHeight = 0;
  if(!bst) {
    return 0;
  } else {
    leftHeight = heightOfBST(bst.left);
    rightHeight = heightOfBSt(bst.right);
    if(leftHeight > rightHeight) {
      return leftHegith + 1;
    } else {
      return rightHeight + 1;
    }
  }
}

module.exports = BinarySearchTree;