//Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous nodes. This are better for finding nodes and can be done in half the time. However, they do take up more memory consierinf the extra pointer

class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined
        let oldTail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = oldTail.previous
            this.tail.next = null
            oldTail.prev = null
        }
        this.length--
        return oldTail
    }
    shift() {
        if (!this.head) return undefined
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.previous = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.head.previous = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) return null
        let counterLeft = 0
        let counterRight = this.length - 1
        let currentHead = this.head
        let currentTail = this.tail
        if (index <= this.length / 2) {
            while (counterLeft != index) {
                currentHead = currentHead.next
                counterLeft++
            }
            return currentHead
        } else {
            while (counterRight != index) {
                currentTail = currentTail.previous
                counterRight--
            }
            return currentTail
        }
    }
    set(index, value) {
        let foundNode = this.get(index)
        if (foundNode != null) {
            foundNode.val = value
            return true
        } return false
    }
    insert(index, val) {
        if (index <= 0 || index >= this.length) return false
        if (index === 0) return this.unshift(val)
        if (index === this.length) return this.push(val)
        let newNode = new Node(val)
        let previousNode = this.get(index - 1)
        let previousNext = previousNode.next
        previousNode.next = newNode
        newNode.previous = previousNode
        newNode.next = previousNext
        previousNext.previous = newNode
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        let removedNode = this.get(index)
        removedNode.previous.next = removedNode.next
        removedNode.next.previous = removedNode.previous
        removedNode.previous = null
        removedNode.next = null
        this.length--
        return removedNode
    }
}

let doublyList = new DoublyLinkedList()

doublyList.push("hello")
doublyList.push("bro")
doublyList.push("how")
doublyList.push("are you?")

console.log(doublyList)

console.log(doublyList.pop())

console.log(doublyList)

console.log(doublyList.shift())

console.log(doublyList)

console.log(doublyList.unshift("Jaime"))

console.log(doublyList.unshift("Tanita"))

doublyList.push("cat")
doublyList.push("500")
doublyList.push("What a beautifull day!")

console.log(doublyList.get(1))
console.log(doublyList.get(5))

doublyList.set(1, "25654")

console.log(doublyList)

doublyList.insert(3, "alsuvfasdvbjasdv")

console.log(doublyList)

console.log(doublyList.get(3))

console.log(doublyList.remove(3))

console.log(doublyList)

console.log(doublyList.remove(5))
console.log(doublyList.remove(4))

console.log(doublyList)
