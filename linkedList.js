const linkedList = () => {
  let head = null;
  let length = 0;

  //adding to the end of the list
  const append = (node) => {
    if (head === null) {
      head = node;
      length++;
    } else {
      let last = lastNode();
      last.nextNode = node;
      length++;
      console.log(last.nextNode);
    }
  };

  const prepend = (node) => {
    if (head === null) {
      head = node;
      length++;
    } else {
      let headPlaceholder = head;
      head = node;
      head.nextNode = headPlaceholder;
      length++;
    }
  };

  const getSize = () => {
    return length;
  };
  const getHead = () => {
    return head;
  };
  const lastNode = () => {
    let current = head;
    while (current) {
      if (current.nextNode) {
        current = current.nextNode;
      } else {
        let lastNode = current;
        current = current.nextNode;

        return lastNode;
      }
    }
    return null;
  };
  const findByIndex = (index) => {
    let current = head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current;
      } else {
        count++;
        current = current.nextNode;
      }
    }
    return null;
  };
  const contains = (value) => {
    let current = head;
    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.nextNode;
      }
    }
    return false;
  };
  const findByValue = (value) => {
    let current = head;
    let count = 0;
    while (current) {
      if (current.value === value) {
        return count;
      } else {
        count++;
        current = current.nextNode;
      }
    }
    return null;
  };
  const pop = () => {
    let secondToLast = findByIndex(length - 2);
    secondToLast.nextNode = null;
  };

  const toString = () => {
    let listString = "";

    let current = head;
    while (current) {
      listString += `(${current.value})->`;
      current = current.nextNode;
    }
    listString += `null`;

    return listString;
  };

  return {
    append,
    prepend,
    getSize,
    getHead,
    lastNode,
    findByIndex,
    pop,
    contains,
    findByValue,
    toString,
  };
};

let list = linkedList();

const createNode = (newValue) => {
  let value = newValue || null;
  let nextNode = null;
  return { value, nextNode };
};

let node1 = createNode(10);
let node2 = createNode(5);
let node3 = createNode(22);
let node4 = createNode("lol");

list.append(node1);
list.append(node2);
list.append(node3);

list.prepend(node4);

console.log(list.getSize());
console.log(list.getHead());
console.log(list.findByIndex(0));
console.log(list.contains(67));
console.log(list.findByValue(5));
console.log(list.toString());

list.pop();
