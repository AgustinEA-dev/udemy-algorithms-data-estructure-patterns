//In computer science, a queue is a data structure that stores items in a sequence, following the first-in, first-out (FIFO) method. Queues are used in many applications and systems, including operating systems and printers.

//Writing a queue with an array

let q = []

q.push("First")
q.push("Second")
q.push("Third")

console.log(q)

console.log(q.shift())
console.log(q.shift())
console.log(q.shift())

q.unshift("First")
q.unshift("Second")
q.unshift("Third")

console.log(q.pop())
console.log(q.pop())
console.log(q.pop())

//Custom queue class

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return this.size++
    }
    dequeue() {
        if (!this.first) return null
        let temp = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

let queue = new Queue()

queue.enqueue("FIRST")
queue.enqueue("SECOND")
queue.enqueue("LAST")

console.log(queue)

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue)