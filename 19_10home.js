const myArray = [5, 'car', true, { name: 'Ali' }, 9.99];

function getRandomValueFromArray(arr) {
    if (arr.length === 0) {
        return 'Массив пуст';
    }

    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const result = getRandomValueFromArray(myArray);
console.log(result);

//это первое 1


function findMaxNumber(arr) {
  if (arr.length === 0) {
      return -Infinity;
  }

  return Math.max(...arr);
}
const myArray = [3, 8, 17, 11, 1];
const result = findMaxNumber(myArray);
console.log(result);

//это второе 2




function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
  }

  return randomString;
}
const desiredLength = 8; 
const result = generateRandomString(desiredLength);
console.log(result);

//это третье 3




const year = parseInt(prompt('год:'));
const month = parseInt(prompt('месяц (1-12):'));

function getDaysInMonth(year, month) {
    if (isNaN(year)  isNaN(month)  month < 1 || month > 12) {
        return 'Неверный ввод.Пожалуйста,введите правильные значения.';
    }

    const lastDay = new Date(year, month, 0).getDate();
    return В месяце ${month}/${year} всего ${lastDay} дней.;
}

const result = getDaysInMonth(year, month);
console.log(result);

//это четвертое 4
