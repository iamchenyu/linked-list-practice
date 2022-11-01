/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let item = new Node((val = val));
    if (this.length === 0) {
      this.head = item;
      this.tail = item;
    } else {
      this.tail.next = item;
      this.tail = item;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let item = new Node((val = val));
    if (this.length === 0) {
      this.head = item;
      this.tail = item;
    } else {
      item.next = this.head;
      this.head = item;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let item = this.head;

    if (!item) throw Error;

    if (this.tail === item) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return item.val;
    }

    while (item.next) {
      if (item.next !== this.tail) {
        item = item.next;
      } else {
        this.tail = item;
        this.length--;
        return item.next.val;
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let firstItem = this.head;
    let secondItem = this.head.next;

    if (!firstItem) throw Error;

    if (!secondItem) {
      this.head = null;
      this.tail = null;
    }

    this.head = secondItem;
    this.length--;
    return firstItem.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length) throw Error;
    let count = 0;
    let item = this.head;
    while (count < idx) {
      item = item.next;
      count++;
    }
    return item.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length) throw Error;
    let count = 0;
    let item = this.head;
    while (count < idx) {
      item = item.next;
      count++;
    }
    item.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newItem = new Node((val = val));

    if (this.length === 0 && idx === 0) {
      this.head = newItem;
      this.tail = newItem;
      this.length++;
    } else {
      if (idx >= this.length) {
        this.push(val);
      } else {
        let count = 0;
        let item = this.head;
        while (count < idx - 1) {
          item = item.next;
          count++;
        }
        let prevItem = item;
        let nextItem = item.next;
        prevItem.next = newItem;
        newItem.next = nextItem;
        this.length++;
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length === 0 || idx < 0) {
      throw Error;
    } else if (idx === 0) {
      this.shift();
    } else if (idx >= this.length) {
      this.pop();
    } else {
      let prevItem = this.getAt(idx - 1);
      let nextItem = this.getAt(idx + 1);
      prevItem.next = nextItem;
      this.length--;
      return this.getAt(idx);
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    } else {
      let ttl = 0;
      let count = 0;
      let item = this.head;
      while (count < this.length) {
        ttl = ttl + item.val;
        item = item.next;
        count++;
      }
      return ttl / this.length;
    }
  }
}

module.exports = LinkedList;
