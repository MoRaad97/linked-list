class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  constructor () {
    this.head = null;  
    this.size = 0;
  }

  add(number) {
    var node = new Node(number ,this.head)
    let current;
    if(this.head === null){
      this.head = node
    } else {
      current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node
    }
    
  }

  get(index) {
    let current = this.head;
    let indexCount = 0;
    
    while(current){
      if (indexCount === index) {
        return current.value
      }
      indexCount+=1;
      current = current.next;
  
    }
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list);
console.log(list.get(7));
// => 5

module.exports = LinkedList;