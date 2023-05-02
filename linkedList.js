import createNode from "./nodes.js";

const linkedList = () => {
  let head = null;
  let length = 0;

  //adding to the end of the list
  const append = (value) => {
    let node = createNode(value);
    if (head === null) {
      head = node;
    } else {
      let last = lastNode();
      last.nextNode = node;
    }
    length++;
  };

  //adding to the start of the list
  const prepend = (value) => {
    let node = createNode(value);
    if (head === null) {
      head = node;
    } else {
      let headPlaceholder = head;
      head = node;
      head.nextNode = headPlaceholder;
    }
    length++;
  };

  const getSize = () => {
    return length;
  };
  const getHead = () => {
    return head.value;
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
    if (secondToLast) {
      secondToLast.nextNode = null;
    } else {
      head = null;
    }
    length--;

    return "success";
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
  const insertAt = (value, index) => {
    if (head === null) {
      return null;
    }
    if (findByIndex(index)) {
      let nodeAtIndex = findByIndex(index);
      let previousNode = findByIndex(index - 1);
      let next = findByIndex(index + 1);

      if (!previousNode && next) {
        prepend(value);
      } else if (!next && !previousNode) {
        append(value);
      } else {
        let node = createNode(value);
        previousNode.nextNode = node;
        node.nextNode = nodeAtIndex;
      }
      length++;
      return "success";
    } else {
      console.log("No nodes on given index");
      return null;
    }
  };
  const removeAt = (index) => {
    if (head === null) {
      return null;
    }
    if (findByIndex(index)) {
      let nodeToRemove = findByIndex(index);
      let previousNode = findByIndex(index - 1);
      let next = findByIndex(index + 1);

      if (!previousNode && next) {
        head = next;
      } else if (!next && previousNode) {
        pop();
      } else {
        previousNode.nextNode = next;
        nodeToRemove.nextNode = null;
      }
      length--;

      return "success";
    } else {
      console.log("No nodes on given index");

      return null;
    }
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
    insertAt,
    removeAt,
  };
};

export default linkedList;
