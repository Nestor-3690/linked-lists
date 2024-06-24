export function LinkedList() {
  let list = null;

  const append = (node) => {
    const listHead = head();
    if (!listHead) {
      list = node;
    } else {
      let previous = listHead;
      while (previous.next !== null) {
        previous = previous.next;
      }
      previous.next = node;
    }
  };

  const prepend = (node) => {
    const listHead = head();
    if (listHead) {
      node.next = listHead;
    }
    list = node;
  };

  const size = () => {
    const listHead = head();
    if (!listHead) return 0;
    let counter = 1;
    let actual = listHead;
    while (actual.next !== null) {
      counter += 1;
      actual = actual.next;
    }
    return counter;
  };

  const head = () => list;

  return { append, prepend, size, head };
}
