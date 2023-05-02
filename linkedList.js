const linkedList = () => {
  let head = null;
  let length = 0;

  //adding to the end of the list
  const append = (node) => {
    if (head === null) {
      head = node;
    } else {
      let last = lastNode();
      last.nextNode = node;
    }
    length++;
  };

  //adding to the start of the list
  const prepend = (node) => {
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
      let node = createNode(value);
      let nodeAtIndex = findByIndex(index);
      let previousNode = findByIndex(index - 1);
      let next = findByIndex(index + 1);

      if (!previousNode && next) {
        prepend(node);
      }
      if (!next && previousNode) {
        append(node);
      } else {
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

      console.log(toString());
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

let list = linkedList();

const createNode = (newValue) => {
  let value = newValue || null;
  let nextNode = null;
  return { value, nextNode };
};

const testing = (() => {
  let node1 = createNode(10);
  let node2 = createNode(5);
  let node3 = createNode(22);
  let node4 = createNode("abcd");

  list.append(node1);
  list.append(node2);
  list.append(node3);
  list.prepend(node4);

  console.log("Size of the list-> " + list.getSize());
  console.log("Head node of the list:");
  console.log(list.getHead());
  console.log("Find node on index 1:");
  console.log(list.findByIndex(1));
  console.log("List contains value 67-> " + list.contains(67));
  console.log("Find index of node containing value 5: ");
  console.log(list.findByValue(5));
  console.log("Insert node at index 2: ");
  console.log(list.insertAt("qwerty", 2));
  console.log("Remove node at index 6: ");
  console.log(list.removeAt(6));
  console.log("Remove from end of the list: ");
  console.log(list.pop());
  console.log("Size of the list");
  console.log(list.getSize());
  console.log("toString method: ");
  console.log(list.toString());
})();
