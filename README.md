# linked-lists

## Description

This package contains:

### LinkedList

A factory that when invoked return an empty (null) linked list with functions:

- append(_node_) : Add the given _node_ to the end of the list
- prepend(_node_) : Add the given _node_ to the start of the list
- size : Return the number of nodes in the list
- head : Return the first node in the list
- tail : Return the last node in the list
- at(_index_) : Return the node at the given _index_
- pop : Remove the last node from the list
- contains(_value_) : Return true if the _value_ is in the list, false otherwise
- find(_value_) : Return the index of the node containing the _value_, null if the value isn't found
- toString : Return a string representation of the list
- insertAt(_node_, _index_) : Insert the given _node_ in the list at the given _index_
- removeAt(_index_) : Remove the node at the given _index_

### Node

A class that when invoked with an argument _value_ (new Node(_value_)) returns a node with:

- node.value = _value_
- node.next = null

These nodes can then be added to the linked list via the LinkedList functions.
