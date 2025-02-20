class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length === this.MAX_SIZE) {
      return false;
    }
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    }
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true;
    }
    return false;
  }

  enqueue(item) {
    if (this.canEnqueue() === true) {
      this.queueControl.push(item);
      return this.queueControl;
    }
    if (this.canEnqueue() === false) {
      throw new Error("QUEUE_OVERFLOW");
    }
  }

  dequeue() {
    if (this.isEmpty() === false) {
      return this.queueControl.shift();
    }
    if (this.isEmpty() === true) {
      throw new Error("QUEUE_UNDERFLOW");
    } // ... your code goes here
  }

  display() {
    let arrayDisplay = [];
    for (let i = 0; i < this.queueControl.length; i++) {
      arrayDisplay.push(this.queueControl[i]);
    }
    return arrayDisplay;
  }
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== "undefined") module.exports = Queue;
