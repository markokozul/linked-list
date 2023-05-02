import linkedList from "./linkedList.js";
import createNode from "./nodes.js";

const list = linkedList();

describe("linkedList methods", () => {
  test("append(node) method adds node to the end of the list", () => {
    list.append("node1");
    list.append("node2");

    expect(list.getHead()).toBe("node1");
    expect(list.lastNode().value).toBe("node2");
  });
  test("prepend(node) method adds node to the start of the list", () => {
    list.prepend("prependedNode");

    expect(list.getHead()).toBe("prependedNode");
    expect(list.lastNode().value).toBe("node2");
  });
  test("getSize() returns number of nodes in the list", () => {
    expect(list.getSize()).toBe(3);
  });
  test("getHead() returns head node of the list", () => {
    expect(list.getHead()).toBe("prependedNode");
  });
  test("lastNode() returns last node in the list", () => {
    expect(list.lastNode().value).toBe("node2");
  });
  test("findByIndex(index) returns node that is located on passed index", () => {
    expect(list.findByIndex(1).value).toBe("node1");
  });
  test("findByValue(value) returns index of the node that contains passed value", () => {
    expect(list.findByValue("prependedNode")).toBe(0);
  });
  test("contains(value) returns true if list contains node that contains passed value,otherwise false", () => {
    expect(list.contains("node2")).toBe(true);
    expect(list.contains("nodeX")).toBe(false);
  });
  test("pop() removes node from the end of the list", () => {
    list.pop();
    expect(list.lastNode().value).toBe("node1");
  });
  test("insertAt(value,index) inserts node at the passed index", () => {
    list.insertAt("insertedNode1", 1);
    expect(list.findByIndex(1).value).toBe("insertedNode1");
    list.insertAt("insertedNode2", 0);
    expect(list.getHead()).toBe("insertedNode2");
  });
  test("removeAt(value,index) removes node at the passed index", () => {
    list.removeAt(1);
    expect(list.findByIndex(1).value).toBe("insertedNode1");
    list.removeAt(0);
    expect(list.getHead()).toBe("insertedNode1");
  });
  test("toString() returns list in specific string format", () => {
    expect(list.toString()).toBe("(insertedNode1)->(node1)->null");
  });
});
