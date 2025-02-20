//A linked list is a data structure that contains a head, tail and length property. Linked Lists consist of nodes, and each node has a valur and a pointer to another node or null. They do not have indexes and they are conencted via node with a next pointer. Random acces is not allowed.

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined
        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    shift() {
        if (!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        return currentHead
    }
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode
            this.tail = head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index) {
        if (index === 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while (counter != index) {
            current = current.next
            counter++
        }
        return current
    }
    set(index, value) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = value
            return true
        }
        return false
    }
    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return this.push(value)
        if (index === 0) return this.unshift(value)
        const newNode = new Node(value);
        let prevNode = this.get(index - 1)
        let temp = prevNode.next
        prevNode.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()
        let prevNode = this.get(index - 1)
        let removedNode = prevNode.next
        prevNode.next = removedNode.next
        this.length--
        return removedNode
    }
    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null
        let next
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
    rotate(){

    }
}

const list = new SingleLinkedList();

//PUSH

list.push(1)
list.push(3)
list.push(10)
list.push(145)
list.push("Agustín")
list.push(["Blue", "Green"])
list.push("Perónismo")

//POP

// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)

//SHIFT
console.log(list)
console.log(list.shift())
console.log(list)
console.log(list.shift())
console.log(list)

console.log(list.unshift("Roberto"))
console.log(list.unshift("Diegote"))

//GET

console.log(list.get(5))

//SET 

console.log(list.set(1, "Paula"))

console.log(list.get(6))
console.log(list.get(1))
console.log(list.get(3))

console.log(list.set(6, "Ricardo Iorio"))
console.log(list.get(6))

console.log(list.set(4, "Ricardo Iorio"))
console.log(list.get(4))

console.log(list.tail)

console.log(list.pop())

console.log(list)

list.set(4, "Azul")
console.log(list.get(4))

list.push(["Hermética", "Alma Fuerte"])
console.log(list)

console.log(list.set(5, "Hola"))
console.log(list)

//INSERT

list.insert(0, "the")

console.log(list)

list.insert(2, "Fútbol")
console.log(list)

console.log(list.get(2))

//REMOVED

list.remove(6)

console.log(list)
console.log(list.tail)

list.remove(3)
console.log(list)
console.log(list.get(3))

//REVERSE
console.log(list)
list.reverse()
console.log(list)

list.push("Peronismo")
console.log(list)








