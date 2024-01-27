
const first = 5; 
const operation = "add"; 
const second = 3; 

function калькулятор(a, operation, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "multiply":
      return a * b;
    case "subtract":
      return a - b;
    case "divide":
      return a / b;
    case "modulo":
      return a % b;
    case "power":
      return Math.pow(a, b);
    default:
      console.log("Wrong operation");
      return null;
  }
}

const result = calculator(first, operation, second);
console.log(result)