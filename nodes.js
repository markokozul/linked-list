const createNode = (newValue) => {
  let value = newValue || null;
  let nextNode = null;
  return { value, nextNode };
};

export default createNode;
