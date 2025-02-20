//In computer science, a stack is a data structure that stores items in a last-in, first-out (LIFO) order. This means that the most recently added item is the first one that can be removed.

//Stack with a single linked list

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = this.first
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return this.size++
    }
    pop() {

    }
}

let stack = new Stack()
stack.push("Agustín")
stack.push("Agustín")
stack.push("Agustín")

console.log(stack)

