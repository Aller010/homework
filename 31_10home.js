function myMath(operation, operand1, operand2) {
    if (typeof operation === 'function') {
        return operation(operand1, operand2);
    }
  


    if (operation in Math) {
        return Math[operation];
    }
  
    let result;
  
    switch (operation) {
        case 'add':
            result = operand1 + operand2;
            break;
        case 'subtract':
            result = operand1 - operand2;
            break;
        case 'multiply':
            result = operand1 * operand2;
            break;
        case 'division':
            result = operand1 / operand2;
            break;
        default:
            console.error('Ошибка:Неизвестная операция.');
            return;
    }
  
    return result;
  }
  
