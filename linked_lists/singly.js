class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    if (this.length == 0) {
      let newNode = new Node(val)
      this.head = newNode
      this.tail = this.head
    } else {
      let newNode = new Node(val)
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (this.length == 0) return undefined
    let currentHead = this.head
    let newTail = currentHead
    while (currentHead.next) {
      newTail = currentHead
      currentHead = currentHead.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length == 0) {
      this.head = null
      this.tail = null
    }
    return currentHead
  }

  shift() {
    if (this.lenght == 0) return undefined
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length == 0) {
      this.tail = null
    }
    return currentHead
  }

  unshift(value) {
    let newNode = new Node(value)
    if (this.length == 0) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined
    let currentHead = this.head
    let counter = 0
    while (counter != index) {
      currentHead = currentHead.next
      counter++
    }
    return currentHead
  }

  set(index, value) {
    let foundNode = this.get(index)
    if (!foundNode) return false

    foundNode.value = value
    return true
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index == this.length) return !!this.push(value)
    if (index == 0) return !!this.unshift(value)

    let rightNode = this.get(index)
    if (rightNode) {
      let leftNode = this.get(index - 1)
      let newNode = new Node(value)
      leftNode.next = newNode
      newNode.next = rightNode
      this.length++
      return true
    }

    return false
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index == 0) return this.shift()
    if (index == this.length - 1) return this.pop()

    let removedNode = this.get(index)
    let previousNode = this.get(index - 1)
    previousNode.next = removedNode.next
    this.length--
    return removedNode
  }

  showAll() {
    let currentHead = this.head
    let counter = 0
    while (counter != this.length) {
      console.log(counter, currentHead.value)
      currentHead = currentHead.next
      counter++
    }
  }

  reverse() {
    let currentHead = this.head
    let next = currentHead.next
    ;[this.head, this.tail] = [this.tail, this.head]
    let counter = 0
    while (counter != this.length) {
      counter++
      console.log(currentHead.value)
      currentHead = currentHead.next
    }
    return this
  }
}

let lst = new SinglyLinkedList()
lst.unshift(2)
lst.unshift(1)
lst.unshift(0)

console.log(lst.reverse())
