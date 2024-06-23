export function LinkedList() {
  let head = null;

  const print = () => console.log(head);

  const append = (node) => {
    if (!head) {
      head = node;
    } else {
      let previous = head;
      while (previous.next !== null) {
        previous = previous.next;
      }
      previous.next = node;
    }
  };

  return { head, print, append };
}
