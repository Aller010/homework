


const arr = [1, 2, 3, 4, 5];
const len = arr.length;

for (let i = 0; i < len / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[len - 1 - i];
    arr[len - 1 - i] = temp;
}

console.log(arr);

//это первое 1




const arr = [1, 2, 3];
const element = 'begin';

for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
}

arr[0] = element;

console.log(arr)

//это второе 2



const obj = { name: 'ALi', age: 18, city: 'Baku' };
const attempts = 10;

const userFields = [];

for (let i = 0; i < attempts; i++) {
    const userInput = prompt('Введите название поля для объекта:');
    
    if (userInput && obj.hasOwnProperty(userInput)) {
        userFields.push(userInput);
    }
}

const existingFields = Object.keys(obj);
const nonExistingFields = userFields.filter(field => !existingFields.includes(field));

console.log('Поля,которые были в объекте:', existingFields);
console.log('Поля,которые не были в объекте:', nonExistingFields);



//это третье 3


const numbers = [1, 2, 1, 4];

const occurrences = numbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});

console.log(occurrences);

//это дополнительное





