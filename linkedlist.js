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

  const head = () => list;

  return { append, head };
}
