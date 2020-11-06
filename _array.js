const M = require('./memory')
const memory = new M();

class Array{
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length)
    }
    // O(n)
    // push(value) {
    //     this._resize(this.length + 1);
    //     memory.set(this.ptr + this.length, value)
    //     this.length++;
    // }
    // O(1) if not resizing
    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }
    // _resize(size) {
    //     const oldPtr = this.ptr;
    //     this.ptr = memory.allocate(size);
    //     if (this.ptr === null) throw new Error('Out of memory');
    //     memory.copy(ths.ptr, oldPtr, this.length)
    //     memory.free(oldPtr)
    // }
    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    insert(index, value) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if(this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value)
        this.length++;
    }
    remove(index) {
        if(index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length--;
    }
}

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    

    console.log(arr);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);
    arr.push(10);
    console.log(arr);
    console.log(arr.get(0))

    var len = arr.length;
    console.log(len)
    for(var i = len - 1; i >= 0; i--) {
        console.log(i)
        arr.remove(i);
    }
    arr.push(-100000000);
    

    console.log(arr.get(0));
    
}

main();