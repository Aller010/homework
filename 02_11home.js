function MyArray() {
    this.length = 0;
  
    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
        this.length++;
    }
  
    this.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
  
        const firstElement = this[0];
  
        for (let i = 0; i < this.length - 1; i++) {
            this[i] = this[i + 1];
        }
  
        delete this[this.length - 1];
        this.length--;
  
        return firstElement;
    };
  
    this.unshift = function () {
        const numOfArgs = arguments.length;
  
        for (let i = this.length - 1; i >= 0; i--) {
            this[i + numOfArgs] = this[i];
        }
  
        for (let i = 0; i < numOfArgs; i++) {
            this[i] = arguments[i];
        }
  
        this.length += numOfArgs;
  
        return this.length;
    };
  }
  const myArr = new MyArray(1, 2, 3);
  console.log(myArr.shift()); 
  console.log(myArr); 
  console.log(myArr.unshift(1, 3));
  console.log(myArr); 
  