class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  add(number) {
    var node = new Node(number ,this.head)
    if(this.head === null){
      this.head = node
    } else {
      this.next_node = this.head;
      while(this.next_node) {
        this.next_node = this.next_node.next;
      }
      current.next = node
    }
    

  }

  get(index) {

  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list);
console.log(list.get(7));
// => 5

module.exports = LinkedList;