const obj = {
    name: 'Alex',
    surName: 'Max',
    AGE: 40
  };
  
  while (true) {
    const userInput = prompt('Введите название поля объекта (для выхода введите "exit"):');
    
    if (userInput.toLowerCase() === 'exit') {
        break;
    }
  
    const isFieldExists = Object.keys(obj).some(field => field.toLowerCase() === userInput.toLowerCase());
    
    console.log(`${userInput} -> ${isFieldExists}`);
  }
  
  
  
  
  
  while (true) {
    const userInput = prompt('Введите строку (для выхода введите "exit"):');
    
    if (userInput.toLowerCase() === 'exit') {
        break;
    }
  
    const reversedString = userInput.split('').reverse().map(char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
  
    console.log(`${userInput} -> ${reversedString}`);
  }
  